<h1>Watt Wise – Smart Energy Consumption Predictor</h1>

<h3>Project Overview</h3>
<p>
Watt Wise is a full-stack machine learning application designed to predict energy consumption based on various environmental and usage factors. 
The system helps users estimate future energy usage, analyze patterns, and make smarter energy decisions to optimize consumption and reduce costs.
</p>

<p><b>Dataset:</b> https://www.kaggle.com/datasets/loveall/appliances-energy-prediction</p>

<h3>Tech Stack</h3>
<ul>
  <li>Front-end: ReactJS, CSS</li>
  <li>Back-end: Python, Flask</li>
  <li>Machine Learning: Regression Models (Linear Regression, Random Forest Regressor), Feature Scaling, Data Preprocessing</li>
</ul>

<h3>Input/Prediction Page</h3>
<img src="https://github.com/IshitaSinha2002/Watt-Wise/blob/main/Screenshot%20(69).png" style="width: 500px; height: 400px; object-fit: cover;">
<img src="https://github.com/IshitaSinha2002/Watt-Wise/blob/main/Screenshot%20(70).png" style="width: 500px; height: 400px; object-fit: cover;">
<p>
Designed an interactive UI where users can input key parameters affecting energy consumption such as:
</p>
<ul>
  <li>Temperature</li>
  <li>Humidity</li>
  <li>Appliance usage</li>
  <li>Time-related features</li>
</ul>
<p>
The interface ensures a smooth user experience with structured inputs instead of complex forms.
</p>
<p>
Developed a results page that displays predicted energy consumption along with:
<ul>
  <li><b>Predicted Energy Usage</b></li>
  <li><b>Consumption Insights</b></li>
</ul>
The UI highlights key predictions clearly for better decision-making.
</p>

<h3>Model Training Implementation Details</h3>
<ol>
  <li><b>Data Processing:</b>
    <ul>
      <li>Handled missing values and cleaned dataset.</li>
      <li>Encoded categorical features if present.</li>
      <li>Scaled numerical features using StandardScaler.</li>
    </ul>
  </li>

  <li><b>Feature Engineering:</b>
    <ul>
      <li>Selected important features such as temperature, humidity, and appliance usage.</li>
      <li>Created time-based features for better prediction.</li>
    </ul>
  </li>

  <li><b>Model Development:</b>
    <p>Algorithms Used:</p>
    <ul>
      <li>Linear Regression</li>
      <li>Random Forest Regressor</li>
      <li>XG Boost</li>
    </ul>
  </li>

  <li><b>Training Process:</b>
    <ul>
      <li>Split dataset into training and testing sets (80/20 split).</li>
      <li>Trained models to learn patterns in energy consumption.</li>
      <li>Ensured proper validation to avoid overfitting.</li>
    </ul>
  </li>

  <li><b>Model Training:</b>
    <ul>
      <li>Implemented using Scikit-learn.</li>
      <li>Fitted models on training data.</li>
      <li>Generated predictions on test data.</li>
    </ul>
  </li>

  <li><b>Model Evaluation Metrics:</b>
    <ul>
      <li>Mean Absolute Error (MAE)</li>
      <li>Mean Squared Error (MSE)</li>
      <li>R² Score</li>
    </ul>
  </li>

  <li><b>Model Comparison:</b>
    <table>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>R² Score</th>
          <th>MAE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linear Regression</td>
          <td>0.11</td>
          <td>0.44</td>
        </tr>
        <tr>
          <td>Random Forest Regressor</td>
          <td>0.53</td>
          <td>0.28</td>
        </tr>
        <tr>
          <td>XG Boost</td>
          <td>0.31</td>
          <td>0.51</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>Selected the best-performing model based on evaluation metrics.</li>
    </ul>
  </li>
</ol>

<h3>Backend Implementation</h3>
<ol>
  <li><b>Framework and Setup:</b>
    <ul>
      <li>Built RESTful APIs using Flask.</li>
      <li>Structured backend for modularity (model loading, preprocessing, API routes).</li>
      <li>Enabled CORS for seamless frontend-backend integration.</li>
    </ul>
  </li>

  <li><b>Model Integration:</b>
    <ul>
      <li>Loaded trained regression model using pickle.</li>
      <li>Applied preprocessing steps before prediction.</li>
      <li>Ensured consistency between training and inference pipeline.</li>
    </ul>
  </li>

  <li><b>Prediction Logic:</b>
    <ul>
      <li>Received user input from frontend.</li>
      <li>Converted input into model-compatible format.</li>
      <li>Generated energy consumption prediction.</li>
      <li>Returned results to frontend for display.</li>
    </ul>
  </li>
</ol>
