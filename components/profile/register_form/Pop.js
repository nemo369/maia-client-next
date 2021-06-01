import React from 'react';
import Popup from 'reactjs-popup';

const Pop = () => (
  <Popup
    trigger={
      <u type="button" className="button">
        תנאי התקנון
      </u>
    }
    modal
    nested
  >
    {(close) => (
      <div className="modal bg-grey-disabled text-xl leading-5 text-grey-active  rounded-lg overflow-auto  max-w-3xl max-h-96">
        <button type="button" className="close" onClick={close}>
          x
        </button>
        <div className="header font-black text-3xl leading-8 text-grey-mid text-center my-4">
          תנאי תקנון:
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem,
          repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque,
          explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
          optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero ad, doloribus,
          voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero ad, doloribus,
          voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero ad, doloribus,
          voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero ad, doloribus,
          voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio
          voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad,
          doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe
          repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <button
            type="button"
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            סגור
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default Pop;
