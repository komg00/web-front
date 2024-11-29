import React, { ReactNode } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full lg:max-w-4xl xl:max-w-6xl p-10 shadow-lg relative mx-10 lg:m-0">
        <HiOutlineChevronLeft
          size={27}
          color="#999"
          className="cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
