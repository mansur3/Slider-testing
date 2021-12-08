
import { Slider } from "./Slider";
import { render, screen, fireEvent } from '@testing-library/react';



test("testing slider working or not", () => {
    render(<Slider />);
    const input = screen.getByTestId("question");
    input.textContent = "learn React";
    const inputAns = screen.getByTestId("answer");
    inputAns.textContent = "I Know that things";

    fireEvent.click(screen.getByTestId("addbtn"));
   
  expect(input).toBeInTheDocument();
  expect(inputAns).toBeInTheDocument();

} )