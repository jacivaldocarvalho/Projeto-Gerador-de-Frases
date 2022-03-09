import React from 'react';
import quotes from '../../db/quotes';

export default function QuoteAndcharacter(props) {
  const { quote, generateRandomQuote } = props;
  return (

      <div id='quote-box'>
            <div id='text-div'>
              <i className='fa fa-quote-left' style={{color:'#00acee'}}></i>
              <div id='text'>
                <p>
                  {quote.quote}
                </p>
              </div>
              <i className='fa fa-quote-right' style={{color:'#00acee'}}></i>
              <p id='author'>-{quote.character}-</p>
            </div>
            <button
              id='new-quote'
              onClick={() => {
                generateRandomQuote(quotes);
              }}
            >
            <i className='fas fa-forward'></i>
            </button>

            <a href='a' id='tweet-quote' target='blank'>
              <button
                id='twitter'
                onClick={() => {
                  window.open(
                    'https://twitter.com/intent/tweet/?text=' +
                      encodeURIComponent(quote.quote + ' -- ' + quote.character)
                  );
                }}
              >
                <i className='fab fa-twitter'></i>
              </button>
            </a>
          </div>

  );
}
