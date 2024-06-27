"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

export default function Modal({isOpen, children}) {
  return(
    <Dialog defaultOpen={isOpen}>
        <DialogTrigger className="bg-teal-900 p-4 rounded-md">Open Modal</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add your new question</DialogTitle>
          </DialogHeader>
          { children }
        </DialogContent>
      </Dialog>
  )
}