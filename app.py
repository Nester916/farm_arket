# Imporiting Necessary Libraries
import streamlit as st
from PIL import Image
import io
import numpy as np
import tensorflow as tf
from utils import clean_image, get_prediction, make_results

# Loading the Model and saving to cache
@st.cache(allow_output_mutation=True)
def load_model(path):
    
    # Xception Model
    xception_model = tf.keras.models.Sequential([
    tf.keras.applications.xception.Xception(include_top=False, weights='imagenet', input_shape=(512, 512, 3)),
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(4,activation='softmax')
    ])


    # DenseNet Model
    densenet_model = tf.keras.models.Sequential([
        tf.keras.applications.densenet.DenseNet121(include_top=False, weights='imagenet',input_shape=(512, 512, 3)),
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(4,activation='softmax')
    ])

    # Ensembling the Models
    inputs = tf.keras.Input(shape=(512, 512, 3))

    xception_output = xception_model(inputs)
    densenet_output = densenet_model(inputs)

    outputs = tf.keras.layers.average([densenet_output, xception_output])


    model = tf.keras.Model(inputs=inputs, outputs=outputs)

    # Loading the Weights of Model
    model.load_weights(path)
    
    return model


# Removing Menu
hide_streamlit_style = """
            <style>
            #MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            </style>
            """
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 

# Loading the Model
model = load_model('model.h5')

# Title and Description
st.title("Farm_arktet's Plant Diesease Detection")
# st.title('Plant Diesease Detection')

st.write("Just Upload your Plant's Leaf Image and get predictions if the plant is healthy or not")

# Setting the files that can be uploaded
uploaded_file = st.file_uploader("Choose a Image file", type=["png", "jpg"])

# If there is a uploaded file, start making prediction
if uploaded_file != None:
    
    # Display progress and text
    # progress = st.text("Crunching Image")
    progress = st.text("Prediction is on Processing ")
    my_bar = st.progress(0)
    i = 0
    
    # Reading the uploaded image
    image = Image.open(io.BytesIO(uploaded_file.read()))
    st.image(np.array(Image.fromarray(
        # np.array(image)).resize((700, 400), Image.ANTIALIAS)), width=None)
        np.array(image)).resize((700, 400), Image.Resampling.LANCZOS
)), width=None)

    my_bar.progress(i + 40)
    
    # Cleaning the image
    image = clean_image(image)
    
    # Making the predictions
    predictions, predictions_arr = get_prediction(model, image)
    my_bar.progress(i + 30)
    
    # Making the results
    result = make_results(predictions, predictions_arr)
    
    # Removing progress bar and text after prediction done
    my_bar.progress(i + 30)
    progress.empty()
    i = 0
    my_bar.empty()
    
    # Show the results
    st.write(f"The plant {result['status']}")

    
        

st.markdown("""
    <style>
    .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #FFFFFF;  /* Text color white */
        background-color: #FFFFFF;
        border: none;
        border-radius: 15px;
        box-shadow: 0 2px #999;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .button:hover {background-color: #FF4B4B}
    .button:active {
        background-color: #FF4B4B;
        box-shadow: 0 1px #666;
        transform: translateY(1px);
    }
    </style>
    <a href="https://github.com/Habib-Un-Hemel/Farm_market_Plant_Disease" class="button">GitHub</a>
    """, unsafe_allow_html=True)
 