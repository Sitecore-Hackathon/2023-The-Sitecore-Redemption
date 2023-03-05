import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';

export type ImageAIProps = {
  params: { [key: string]: string };
};

const configuration = new Configuration({
  //TODO: Get API key from environment variable
  apiKey: '<API KEY HERE>'
});
const openai = new OpenAIApi(configuration);


export const Default = (props: ImageAIProps): JSX.Element => {

  const [result, setResult] = useState<string>();

  useEffect(() => {
    async function getResults() {
      if (!configuration.apiKey) {
        return;
      }

      const input = props.params.Prompt.trimEnd();
      if (!input) return;


      try {

        const response = callOpenAI(input);

        setResult(await response)
      } catch (error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    }


    async function callOpenAI(prompt: string) {
      try {
        const completion = await openai.createImage({          
          prompt: generatePrompt(prompt),
          size: "1024x1024"
        });
        const aiResponse = completion.data.data[0].url;
        return aiResponse;
      } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error instanceof Error) {
          if (error.message) {
            console.error(error.message);
          } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
          }
        }
        return "";
      }
    }

    function generatePrompt(prompt: string) {
      // Add your custom logic here to generate the prompt
      return prompt;
    }

    getResults();
  }, []);


  const text = result ? (
    result
  ) : (
    <span className="is-empty-hint">Rich text AI</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component image-text-ai`}
      id={id ? id : undefined}
    >
         <img src={`${text}`} />
    </div>
  );
};
