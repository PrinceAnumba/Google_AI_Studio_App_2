import  { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { Skeleton } from "./ui/skeleton";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useToast } from "./ui/use-toast";

function InputBox() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const apiKey = import.meta.env.VITE_REACT_PUBLIC_GEMINI_API_KEY;


  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const parts = [
        {
          text: "Identify all brand names mentioned in the input. Multiple products will be separated by commas.just list out the answers no words in between",
        },
        { text: `input: ${userInput}` },
      ];

      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
      });
      setResponse(result.response.text());
      // toast({
      //   title: "Uh oh! Something went wrong.",
      //   description: `${response}`,
      // });
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="my-0 mx-auto bg-[#e9e4e4] dark:bg-[#100020] flex items-center p-2 rounded w-full max-w-[500px]">
        <Input
          type="text"
          className="bg-[#e9e4e4] dark:bg-[#100020] border-none   focus-visible:ring-transparent rounded-none text-gray-500"
          placeholder="Input your text here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button onClick={handleSubmit}>
          {!loading ? (
            <Icons.arrowUp className="w-6 sm:w-4 sm:p-" />
          ) : (
            <div></div>
          )}
          {loading ? <div className="loader w-6"></div> : <div></div>}
        </Button>
      </div>

      <div className="">
        {loading ? (
          <div className="response mt-4 max-w-[500px] mx-auto bg-[#e9e4e4] dark:bg-[#100020] p-4">

          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          </div>
        ) : (
          <div className="response mt-4 max-w-[500px] mx-auto bg-[#e9e4e4] dark:bg-[#100020] p-4">
          <div className="space-y-2 text-xs ali">
            <ul className="flex justify-start flex-col items-start gap-4">
              {response &&
                response.split(", ").map((brand, index) => (
                  <li key={index} className="">
                    🎯 {brand}
                  </li>
                ))}
            </ul>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputBox;
