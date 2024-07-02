import React from 'react'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Icons } from './ui/icons';
import { Skeleton } from "@/components/ui/skeleton";


function InputBox() {
  return (
    <div className="">
      <div className="my-0 mx-auto  bg-[#e9e4e4] dark:bg-[#100020] flex items-center p-2 rounded w-full max-w-[500px]">
        <Input
          type="text"
          className="bg-transparent border-none focus:ring-0 focus:outline-none focus-visible:ring-0 rounded-none"
          placeholder="Input your text here"
        />
        <Button>
          <Icons.arrowUp className="w-6" />
        </Button>
      </div>
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
    </div>
  );
}

export default InputBox