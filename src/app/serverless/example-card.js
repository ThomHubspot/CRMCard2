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
	    "type": "crm::report",
	    "reportId": 93176747
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
				"title": "Attention : informations confidentielles. A ne pas partager",
				"variant": "error",
				"body": {
					"type": "text",
					"text": "Les informations ci-dessous ne doivent pas être modifiées, partagées ou supprimées sans autorisation préalable."
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
						"label": "Cerfa 15312 03 - Activitiés Immobilièrs",
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
				"variant": "success"
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
						"label": "Cerfa 15312 03",
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
				"src": "https://docplayer.fr/docs-images/41/2937820/images/page_6.jpg",
				"alt": "Cerfa 15312 03",
				"width": 100,
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "my-custom-function"
				}
			},
			{
				"type": "tag",
				"text": "Validé",
				"variant": "success"
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
						"href": "https://docplayer.fr/docs-images/41/2937820/images/page_6.jpg"
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
				"src": "https://www.labarredemonts-fromentine.fr/wp-content/uploads/2019/05/carte-identite-1200x630.jpg",
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
						"href": "https://www.labarredemonts-fromentine.fr/wp-content/uploads/2019/05/carte-identite-1200x630.jpg"
					}
				]
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Bulletin de salaire",
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
				"src": "https://lvexpertisex3.com/x3help/FRA/OBJ/BULCALT_cadre_av.png",
				"alt": "HubSpot logo",
				"width": 100,
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "my-custom-function"
				}
			},
			{
				"type": "tag",
				"text": "en cours de vérification",
				"variant": "warning"
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
						"href": "https://lvexpertisex3.com/x3help/FRA/OBJ/BULCALT_cadre_av.png"
					}
				]
			},
			{
				"type": "descriptionList",
				"items": [
					{
						"label": "Agents Immobiliers - Formation Loi Alur de 1h à 42h",
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
				"src": "data:image/jpeg;base64,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1aksSb20XLp8acd0MwZ97dxANQxpkADbNL4sgBnPBl484B3YH9an9ose9uDc+3u7J2izKg9443C7gM3H1c42gwd0GOVaEG85UEH2YESfKDII25B5n8A56W3aDWwq6eSxaBcfrtgqSPE0k/3NSn7IY5NuwTAWSbhwOkeXp0rkWYbWLvkTPs6yJG4Hz+WTJqTp3uu7KLjDIZd1mAFBgrM+KZHw20EzS9m2kbettVeIkTwYkD0wPwqdVedLe6X/AITbU/j5/wAK20unuqRvvbwOR3arPrg4oJ1KUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKVw1G+BsCkzkMSBHxAOeOlBwv6AM7OXuCVRdouMEGxiwYLwGk5PUKAcYrj+RhEd9f/etPEc1ovtmP+H4E5u4bau4DGV3boOMRihOsnjTx0zd/E484x/HyDuezBBHeXcxnvDODOPKsHsxfv3R5kXGBMKqiTycL+JNc7zaqfCLEepuE8DoBnM/L+ObR1UruFnbI3kM8x1gbYJ/Cg2/JI/S3v3h4xj+FWVUZfXDO3TnIEBrg5IkmR0z+PBjPRDrYyNPPo12P/T0xnr5DoFxSqb/Gd4SO47rcYB7zftkxxieP7wJPZov577u5hYNvdE53DxZjj+8ALClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUH//2Q==",
				"alt": "Agents Immobiliers - Formation Loi Alur de 1h à 42h",
				"width": 100,
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "my-custom-function"
				}
			},
			{
				"type": "tag",
				"text": "en cours de vérification",
				"variant": "warning"
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
						"href": "https://www.campus26.com/wp-content/uploads/2020/09/Agents_Immobiliers_-_Formation_Loi_Alur_de_1h_a_42h-1.pdf"
					}
				]
			}
		]
  };	
	
	 const tileThree = {
    "type": "tile",
    "content": [
  {
    "type": "heading",
    "text": "tableau d'avancement"
  },
  {
    "type": "progressBar",
    "variant": "success",
    "valueMax": 150,
    "value": 50,
    "title": "Séléction du document",
    "valueDescription": "90 out of 150",
    "showPercentage": true
  },
  {
    "type": "progressBar",
    "variant": "warning",
    "valueMax": 100,
    "value": 20,
    "title": "Lécture du document",
    "valueDescription": "45 out of 100",
    "showPercentage": true
  },
  {
    "type": "progressBar",
    "variant": "danger",
    "valueMax": 150,
    "value": 10,
    "title": "Signiture",
    "valueDescription": "10 out of 150",
    "showPercentage": true
  },
	    {
    "type": "progressBar",
    "variant": "success",
    "valueMax": 150,
    "value": 150,
    "title": "Réception du code de sécurité par SMS",
    "valueDescription": "150 out of 150",
    "showPercentage": true
  },
	    {
    "type": "progressBar",
    "variant": "danger",
    "valueMax": 150,
    "value": 0,
    "title": "Saisie du code",
    "valueDescription": "0 out of 150",
    "showPercentage": true
  },
	        {
    "type": "progressBar",
    "variant": "danger",
    "valueMax": 150,
    "value": 0,
    "title": "Document signé",
    "valueDescription": "0 out of 150",
    "showPercentage": true
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
      sections: [tileOne,tileTwo,tileThree],
    });
	  
	  
	  
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [tileOne,tileTwo,tileThree],
    });
  }
};
