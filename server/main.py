import numpy as np
import tensorflow as tf
import cv2
import base64
from io import BytesIO
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load model
model = tf.keras.models.load_model(
    'C:\\Users\\K.RAMESH\\OneDrive\\Desktop\\srgan-website\\server\\model\\gen_model.h5',
    compile=False
)

print(model.summary())

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return 'No image found', 400

    image_file = request.files['image']
    image_bytes = image_file.read()
    np_arr = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    sr_image, lr_image = generate_image(img)
    print(sr_image.shape)
    print(lr_image.shape)
    # Return the Base64-encoded images in the JSON response
    return jsonify({
        'sr_image': encode_image_to_base64(sr_image),
    })

def encode_image_to_base64(image):
    pil_image = Image.fromarray(image)
    buffer = BytesIO()
    pil_image.save(buffer, format="jpeg")
    buffer.seek(0)
    base64_string = base64.b64encode(buffer.read()).decode('utf-8')
    return base64_string

def generate_image(img):
    print('Generating image...')
    lr_image = preprocess_image(img)
    sr_image = model.predict(lr_image)
    sr_image = np.clip(sr_image[0] * 255.0, 0, 255).astype(np.uint8)
    return sr_image, lr_image

def preprocess_image(img, target_size=(96, 96)):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # BGR to RGB
    img = cv2.resize(img, target_size)  # Resize
    img = img.astype(np.float32) / 255.0  # Normalize
    img = np.expand_dims(img, axis=0)  # Batch dimension
    return img

if __name__ == '__main__':
    app.run(debug=True)
