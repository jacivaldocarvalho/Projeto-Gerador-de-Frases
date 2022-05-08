/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
import { render } from '@testing-library/react';
import Enzyme, { mount } from 'enzyme';
import App from './assets/js/App.js';
import Quotes from './assets/components/Quotes';

// Add your adapter version below
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

test('displays a quote', () => {
  render(<App />);
  const quote = document.querySelector('#text p');
  expect(quote).toBeInTheDocument();
  expect(quote).not.toBeEmptyDOMElement();
});

it('calls generateRandomQuote prop function when next button is clicked', () => {
  const generateRandomQuoteFn = jest.fn();
  const quote = mount(
    <Quotes generateRandomQuote={generateRandomQuoteFn} quote={{}} />
  );
  const generateBtn = quote.find('#new-quote');

  generateBtn.simulate('click');
  expect(generateRandomQuoteFn).toHaveBeenCalledTimes(1);
});
