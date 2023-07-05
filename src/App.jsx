import CardsLayout from "./components/cardsLayout/CardsLayout";
import ProfileCard from "./components/profileCard/ProfileCard";

function App() {
  return (
    <CardsLayout columns={3}>
      <ProfileCard
        name="Jonas"
        profession="Home cook"
        imageUrl="https://www.fakepersongenerator.com/Face/male/male20161086307378571.jpg"
      />
      <ProfileCard
        name="Petras"
        profession="Driver"
        imageUrl="https://www.fakepersongenerator.com/Face/female/female2017102621391950.jpg"
      />
    </CardsLayout>
  );
}

export default App;
