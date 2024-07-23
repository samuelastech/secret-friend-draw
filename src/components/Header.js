export const Header = () => {
  return (
    <div>
      <header>
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Secret friend drawer's logo" />
        <img src={process.env.PUBLIC_URL + '/images/person.png'} alt="Avatar image of a participant" />
      </header>
    </div>
  );
};
