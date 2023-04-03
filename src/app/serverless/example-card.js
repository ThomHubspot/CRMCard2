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
    "type": "progressBar",
    "variant": "success",
    "valueMax": 100,
    "value": 35,
    "title": "Progression du dossier",
    "valueDescription": "35 of 150",
    "showPercentage": true
  },
			{
				"type": "button",
				"text": "Actualiser",
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
				"type": "descriptionList",
				"items": [
					{
						"label": "Carte nationale d’identité ou Titre de sejour",
						"value": {
							"type": "text",
							"format": "markdown",
							"text": "Ajouté le 01/02/2023"
						}
					}
				]
			},
			{
				"type": "image",
				"src": "https://p.calameoassets.com/130325233822-e546c4a5ceb3185f764694c7f788bf37/p1.jpg",
				"alt": "Cerfa 15312*03 activities immobilières",
				"width": 100,
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "my-custom-function"
				}
			},
			{
				"type": "tag",
				"text": "Validé",
				"variant": "Success"
			},
			{
				"type": "buttonRow",
				"buttons": [
					{
						"type": "button",
						"variant": "primary",
						"text": "Visualiser le document"
					},
					{
						"type": "button",
						"text": "Ajouter/Modifier/effacer",
						"href": "https://p.calameoassets.com/130325233822-e546c4a5ceb3185f764694c7f788bf37/p1.jpg"
					}
				]
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Carte nationale d’identité ou Titre de sejour",
						"value": {
							"type": "text",
							"format": "markdown",
							"text": "Ajouté le 01/02/2023"
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
				"text": "Vérification visuelle pas encore validée",
				"variant": "error"
			},
			{
				"type": "buttonRow",
				"buttons": [
					{
						"type": "button",
						"variant": "primary",
						"text": "Visualiser le document"
					},
					{
						"type": "button",
						"text": "Ajouter/Modifier/effacer",
						"href": "https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/REAL%20ID-Compliant%20Non-Commercial%20Driver%27s%20License.jpg"
					}
				]
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Carte nationale d’identité ou Titre de sejour",
						"value": {
							"type": "text",
							"format": "markdown",
							"text": "Ajouté le 01/02/2023"
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
				"text": "Vérification visuelle pas encore validée",
				"variant": "error"
			},
			{
				"type": "buttonRow",
				"buttons": [
					{
						"type": "button",
						"variant": "primary",
						"text": "Visualiser le document"
					},
					{
						"type": "button",
						"text": "Ajouter/Modifier/effacer",
						"href": "https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/REAL%20ID-Compliant%20Non-Commercial%20Driver%27s%20License.jpg"
					}
				]
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Carte nationale d’identité ou Titre de sejour",
						"value": {
							"type": "text",
							"format": "markdown",
							"text": "Ajouté le 01/02/2023"
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
				"text": "Vérification visuelle pas encore validée",
				"variant": "error"
			},
			{
				"type": "buttonRow",
				"buttons": [
					{
						"type": "button",
						"variant": "primary",
						"text": "Visualiser le document"
					},
					{
						"type": "button",
						"text": "Ajouter/Modifier/effacer",
						"href": "https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/REAL%20ID-Compliant%20Non-Commercial%20Driver%27s%20License.jpg"
					}
				]
			}
		]
	}
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
