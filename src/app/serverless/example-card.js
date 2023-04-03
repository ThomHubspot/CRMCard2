// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

  const tileOne = {
    "type": "tile",
    "content": [
      {
        "type": "heading",
        "text": "Avancement"
      },
      {
				"type": "alert",
				"title": "Alert: confidential information. Not to be shared",
				"variant": "error",
				"body": {
					"type": "text",
					"text": "click on the following url to either view or redirected to the document"
				}
			},
			{
				"type": "divider",
				"distance": "small"
			},
			{
    "type": "heading",
    "text": "Products purchased in last month"
  },
  {
    "type": "progressBar",
    "variant": "success",
    "valueMax": 150,
    "value": 50,
    "title": "T-shirts",
    "valueDescription": "50 out of 150",
    "showPercentage": true
  },
  {
    "type": "progressBar",
    "variant": "warning",
    "valueMax": 100,
    "value": 20,
    "title": "Bottles",
    "valueDescription": "20 out of 100",
    "showPercentage": true
  },
  {
    "type": "progressBar",
    "variant": "danger",
    "valueMax": 150,
    "value": 10,
    "title": "Stickers",
    "valueDescription": "10 out of 150",
    "showPercentage": true
  },
			{
				"type": "tag",
				"text": "Waiting for validation",
				"variant": "warning",
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "exampleFunction"
				}
			},
			{
				"type": "button",
				"text": "Contact the doctor",
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "exampleFunction"
				}
			}
	     ]
  };
   
	
const tileTwo = {
    "type": "tile",
		"content": [
			{
				"type": "heading",
				"text": "Documents"
			},
			{
				"type": "divider",
				"distance": "small"
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Medical ID",
						"value": {
							"type": "text",
							"format": "markdown",
							"text": ""
						}
					}
				]
			},
			{
				"type": "image",
				"src": "https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/REAL%20ID-Compliant%20Non-Commercial%20Driver%27s%20License.jpg",
				"alt": "HubSpot logo",
				"width": 100,
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "my-custom-function"
				}
			},
			{
				"type": "tag",
				"text": "Medical ID Expired",
				"variant": "error"
			},
			{
				"type": "buttonRow",
				"buttons": [
					{
						"type": "button",
						"variant": "primary",
						"text": "Visualise document"
					},
					{
						"type": "button",
						"text": "Go to link",
						"href": "https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/REAL%20ID-Compliant%20Non-Commercial%20Driver%27s%20License.jpg"
					}
				]
			}
		]
  };	
			
  try {
    const { data } = await axios.get("https://zenquotes.io/api/random");

    const quoteSections = [
      {
        type: "tile",
        body: [
          {
            type: "text",
            format: "markdown",
            text: `**Hello ${firstname}, here's your quote for the day**!`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_${data[0].q}_`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_**Author**: ${data[0].a}_`,
          },
        ],
      },
      {
        type: "button",
        text: "Get new quote",
        onClick: {
          type: "SERVERLESS_ACTION_HOOK",
          serverlessFunction: "crm-card",
        },
      },
    ];

    sendResponse({
      sections: [tileOne,tileTwo],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [tileOne,tileTwo],
    });
  }
};
