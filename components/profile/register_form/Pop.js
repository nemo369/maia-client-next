import Popup from 'reactjs-popup';

const Pop = () => (
  // TODO: on open do:
  // var wrapper =document.querySelector('#__next')
  // wrapper.style.filter ='blur(2px)'

  <Popup
    trigger={
      <button type="button" className="button">
        תנאי התקנון
      </button>
    }
    modal
    nested
  >
    {(close) => (
      <div className="modal bg-white text-xl leading-5 text-grey-active overflow-hidden rounded-lg    max-h-96">
        <button type="button" className="close" onClick={close}>
          x
        </button>
        <div className="header font-black text-3xl leading-8 text-grey-mid text-center my-4">
          תנאי תקנון:
        </div>
        <div className="uu max-w-5xl max-h-72 overflow-auto scrollbar scrollbar-thumb-green-500 ">
          <div className="content px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem,
            repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque,
            explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
            optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
            optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
            optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi
            beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam
            libero ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae? repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae
            optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero
            ad, doloribus, voluptas rem alias. Vitae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias.
            Vitae?
          </div>
        </div>
        <div className="actions">
          <button
            type="button"
            className="button"
            onClick={() => {
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
