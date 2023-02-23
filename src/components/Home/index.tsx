import React, { useCallback, useState } from "react";
import { Button, Container, Form, Input, TextIsValid, Title } from "./styles";

const colchetesOpen = "[";
const colchetesClose = "]";
const parentesesOpen = "(";
const parentesesClose = ")";
const chavesOpen = "{";
const chavesClose = "}";

export function Home() {
  const [isValid, setIsValid] = useState("");
  const handleSubmit = useCallback((event: any) => {
    event.preventDefault();
    let text = event.target.inputText.value;

    isBrackets(text.split(""));
    bracketsPair(text.split(""));
    bracketsClose(text.split(""));

    if (
      isBrackets(text.split("")) &&
      bracketsPair(text.split("")) &&
      bracketsClose(text.split(""))
    ) {
      setIsValid(`The string ${text} is valid`);
    } else {
      setIsValid(`The string ${text} is not valid`);
    }
  }, []);
  function isBrackets(text: string[]) {
    let isBracketsBool = true;
    if (text.length == 0) {
      isBracketsBool = false;
    }
    text.forEach((character: string) => {
      if (
        character != colchetesOpen &&
        character != colchetesClose &&
        character != parentesesOpen &&
        character != parentesesClose &&
        character != chavesOpen &&
        character != chavesClose
      ) {
        isBracketsBool = false;
      }
    });
    return isBracketsBool;
  }
  function bracketsPair(text: string[]) {
    let bracketsPairBool = true;

    let pairColchetesOpen = 0;
    let pairColchetesClose = 0;
    let pairParentesesOpen = 0;
    let pairParentesesClose = 0;
    let pairChavesOpen = 0;
    let pairChavesClose = 0;

    text.forEach((character: string) => {
      if (character == colchetesOpen) {
        pairColchetesOpen++;
      } else if (character == colchetesClose) {
        pairColchetesClose++;
      } else if (character == parentesesOpen) {
        pairParentesesOpen++;
      } else if (character == parentesesClose) {
        pairParentesesClose++;
      } else if (character == chavesOpen) {
        pairChavesOpen++;
      } else if (character == chavesClose) {
        pairChavesClose++;
      }
    });
    if (
      pairColchetesOpen != pairColchetesClose ||
      pairParentesesOpen != pairParentesesClose ||
      pairChavesOpen != pairChavesClose
    ) {
      bracketsPairBool = false;
    }
    return bracketsPairBool;
  }
  function bracketsClose(text: string[]) {
    let bracketsCloseBool = true;
    let stack: String[] = [];
    text.map((character: String, index: number) => {
      if (character == colchetesClose) {
        if (colchetesOpen == stack[stack.length - 1]) {
          stack.splice(stack.length - 1, 2);
        }
      } else if (character == parentesesClose) {
        if (parentesesOpen == stack[stack.length - 1]) {
          stack.splice(stack.length - 1, 2);
        }
      } else if (character == chavesClose) {
        if (chavesOpen == stack[stack.length - 1]) {
          stack.splice(stack.length - 1, 2);
        }
      } else {
        stack.push(character);
      }
    });
    if (stack.length > 0) {
      bracketsCloseBool = false;
    }
    return bracketsCloseBool;
  }
  return (
    <Container>
      <Title>Innova Connect Sistemas</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="inputText" placeholder="Type a string" />
        <Button type="submit">Submit</Button>
      </Form>
      <TextIsValid>{isValid}</TextIsValid>
    </Container>
  );
}
