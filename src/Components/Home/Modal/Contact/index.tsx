import React, { useState, useRef } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useContact } from "@/store/contact";
import Lottie from "@/Components/Geral/Lottie";
import { FaLock } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { contactService } from "@/services/contact";

export default function ContactModalHome() {
  const [sended, setSended] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { isOpen, close } = useContact();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const verify = () => {
    if (
      nameRef.current?.value &&
      emailRef.current?.value &&
      phoneRef.current?.value
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const sendContact = () => {
    setSended(true);
    contactService
      .send({
        name: nameRef.current?.value || "",
        email: emailRef.current?.value || "",
        phone: phoneRef.current?.value || "",
        message: messageRef.current?.value || "",
      })
      .then(() => {
        setTimeout(() => {
          closeModal();
        }, 3000);
      });
  };

  const closeModal = () => {
    setSended(false);
    close();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered size="xl">
        <ModalOverlay />
        <ModalContent rounded={"sm"} py={1} px={2}>
          {sended ? (
            <div className="center py-12">
              <Lottie
                animationData="send"
                style={{ width: 300, height: 300 }}
              />
              <ModalCloseButton top={5} right={5} />
            </div>
          ) : (
            <>
              <ModalHeader fontWeight={700} fontSize="2xl" className="center">
                Contact Us
                <GrContact className="ml-3 text-lg" />
              </ModalHeader>
              <ModalCloseButton top={5} right={5} />
              <ModalBody className="gap-2 flex flex-col" py={3}>
                <FormControl id="name">
                  <Input
                    ref={nameRef}
                    autoFocus
                    size="sm"
                    focusBorderColor="primary"
                    placeholder="Enter your name"
                    onChange={verify}
                  />
                </FormControl>
                <div className="flex gap-2">
                  <FormControl id="email">
                    <Input
                      ref={emailRef}
                      autoFocus
                      placeholder="Enter your email address"
                      focusBorderColor="primary"
                      size="sm"
                      type="email"
                      onChange={verify}
                    />
                  </FormControl>

                  <FormControl id="phone">
                    <Input
                      ref={phoneRef}
                      autoFocus
                      placeholder="Enter your phone number"
                      focusBorderColor="primary"
                      size="sm"
                      type="phone"
                      onChange={verify}
                    />
                  </FormControl>
                </div>
                <FormControl id="message">
                  <Textarea
                    autoFocus
                    placeholder="Enter your message"
                    focusBorderColor="primary"
                    size="sm"
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <div className="flex-1">
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    className="flex items-center"
                  >
                    We&apos;ll never share your information.
                    <FaLock className="ml-2 text-xs" />
                  </Text>
                </div>
                <div className="flex">
                  <Button size="sm" variant="ghost" mr={3} onClick={closeModal}>
                    Close
                  </Button>
                  <Button
                    size="sm"
                    onClick={sendContact}
                    px={6}
                    disabled={disabled}
                    cursor={disabled ? "not-allowed" : "pointer"}
                    className={disabled ? "bg-gray-700" : "bg-primary"}
                    colorScheme="primary"
                  >
                    Get Started
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
