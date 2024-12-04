import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Landing from "./components/Landing";
import Experience from "./components/Experience"


function App() {
  const data = [
    {
      image: "https://static.wixstatic.com/media/c837a6_f6ba61c07169441eb03c40597098b9ac~mv2.jpg/v1/crop/x_3,y_366,w_2497,h_1997/fill/w_319,h_245,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f6ba61c07169441eb03c40597098b9ac~mv2.jpg",
      name: "Alone",
      description: "Describe the product here. Include important features, pricing and other relevant info.",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_d527f7b630344d329e97d76dccdb2ae9~mv2.jpg/v1/crop/x_0,y_1,w_2500,h_1999/fill/w_319,h_245,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/A%20dragon%20illustration%20from%20the%20gsme%20_Dragons%20Lair_%20background.jpg",
      name: "Mountain Pass",
      description: "Describe the product here. Include important features, pricing and other relevant info.",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_f2d06d573aac4e38b0b4f37ece27cc1b~mv2.jpg/v1/fill/w_319,h_245,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/A%20robot%20with%20a%20shotgun%20form%20the%20game%20_Atactic_%20background.jpg",
      name: "Safar",
      description: "Describe the product here. Include important features, pricing and other relevant info.",
    },
  ];


  return (
    <>
      <Landing />
      <Cards data={data} />
      <AboutUs />
      <Experience/>
    </>
  );
}

export default App;
