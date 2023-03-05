![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2023

# Hackathon Submission Entry form


## Team name
The Sitecore Redemption

## Category
Best enhancement to SXA Headless

## Description
  - Module Purpose:  This module brings AI to Sitecore SXA headless.  
  - With the rise of AI, content authors can take advantage of the many tools available to them.  With this module, we expose two new SXA Headless components:
    - Rich Text (AI) - Generates a new reponse upon each load of the page in response to an author-defined prompt. 
    - Image (AI) - Generates a new image upon each load of the page in response to an author-defined prompt.


## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

![Video Link](docs/images/Content-Editor.webm.mov "Video Link")



## Pre-requisites and Dependencies

-   Sitecore 10.3 XM with SXA Headless (SIA)
-   Sitecore CLI 5.1.25 (Serialization)
-   Node JS
-   JSS CLI
- OpenAI developer API key


## Installation instructions

### Prerequisites
  - Obtain an OpenAI API Key using from your [OpenAI account](https://platform.openai.com/account/api-keys).  Create an account if necessary.
  - Clone the repo

#### Sitecore Setup

1. Install Sitecore 10.3 XM with SXA using SIA
2. Make sure [Sitecore Management Services](https://doc.sitecore.com/xp/en/developers/103/developer-tools/sitecore-management-services.html) is installed 
2. Install Sitecore CLI by running:  `dotnet tool restore` or visit [this link](https://doc.sitecore.com/xp/en/developers/103/developer-tools/install-sitecore-command-line-interface.html).
3. Login to Sitecore CLI:  `dotnet sitecore login --authority https://<Sitecore identity server> --cm http://<Sitecore instance> --allow-write true`
4. Run `dotnet sitecore ser push`
5. Publish site

#### Rendering Host Setup

1. Go to `\src\redemption-sxa-app`
2. Install JSS CLI - `npm install -g @sitecore-jss/sitecore-jss-cli`
3. Run `Set ExecutionPolicy Unrestricted`
4. Run `npm i`
5. Run `$env:NODE_TLS_REJECT_UNAUTHORIZED=0` 
6. Run `jss setup`
    - Note: API key is already created and serialized. Use: `F14140A1-C283-4A8C-B8A3-1AEC85E5A218`
7. Run `jss deploy config`
8. Run `jss start:connected`

### Configuration

Ensure that .env is correctly setup for your environment.

## Usage instructions
1. To uses the components, open a page in Experience Editor.  (The Home item already has an example of these components)
2. From the toolbar, drag either the "Rich Text (AI)" or "Image (AI)" components under the "Hackathon" group to your page.  
![Toolbar](docs/images/toolbox.png?raw=true "Toolbar")
3. You should be presented with an dialog to enter a "Prompt".  This will be used to Render the AI-generated content.

![AI Prompt](docs/images/ai-prompt.png?raw=true "AI Prompt")

4. You should see the AI generated content.  Publish the page.



## Comments
- Currently, the images and text blurbs are regernated upon page load, however, this can easily extended to maintain the image, or even add additional logic to save it into the CM.
