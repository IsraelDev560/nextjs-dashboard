import { render } from '@testing-library/react';
import ButtonTest from '../buttonTest';

describe("Card Component", () => {
    it("Should render ButtonTest", () => {
        const { getByText, getByRole } = render(<ButtonTest>Button</ButtonTest>)

        const buttonElement = getByRole('button');
        const buttonTextElement = getByText('Button');

        expect(buttonElement).toBeInTheDocument();
        expect(buttonTextElement).toBeInTheDocument();
    });

    it(`should render 'Loading...' text when isLoading was passed`, () => {
        const { getByText } = render(<ButtonTest isLoading>Button</ButtonTest>)

        const isLoadingText = getByText('Loading...');

        expect(isLoadingText).toBeInTheDocument();
    });

    it(`should render the button with background color green by default`, () => {
        const { getByRole } = render(<ButtonTest>Button</ButtonTest>)

        const buttonElement = getByRole('button');

        expect(buttonElement).toHaveStyle({
            backgroundColor: 'rgb(0, 128, 0)'
        });
    });

    it(`should render the button with background color red when color=red was passed`, () => {
        const { getByRole } = render(<ButtonTest color='red'>Button</ButtonTest>)

        const buttonElement = getByRole('button');

        expect(buttonElement).toHaveStyle({
            backgroundColor: 'rgb(255, 0, 0)'
        });
    });
})