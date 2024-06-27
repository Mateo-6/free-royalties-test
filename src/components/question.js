import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";

export function Question ({ handleSaveChoice, index, choice }) {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full items-center gap-4">
      <Input type="textarea" placeholder="Text" value={choice.text} onChange={(e) => handleSaveChoice(index)(e.target.value, choice.type)}/>
      <Select value={choice.type} onValueChange={(e) => handleSaveChoice(index)(choice.text, e)}>
        <SelectTrigger>
          <SelectValue placeholder="Select a type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem value="dollar">Dollar</SelectItem>
            <SelectItem value="number">Number</SelectItem>
            <SelectItem value="string">String</SelectItem>
            <SelectItem value="boolean">Boolean</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}