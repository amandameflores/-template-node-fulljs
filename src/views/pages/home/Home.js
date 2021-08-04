import floatImage from '../../components/float/floatImage';
import homeSectionOne from '../../components/sections/homeSectionOne';
import homeSectionTwo from '../../components/sections/homeSectionTwo';

let Home = {
  is_private: false,

  render: async () => {
    let view = `
          <div>
          ${homeSectionOne}
          ${homeSectionTwo}
          ${floatImage}
          </div>
          
      `;

    return view;
  },

  after_render: async () => {},
};

export default Home;