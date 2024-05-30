import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import ProfileCardComponent from './components/Card';



function App() {
  const cardData = [{ id: 1, name: "HR Manger" }, { id: 2, name: "Data Analyst" }, { id: 3, name: "Legal Counsel" }];

  return (
    <div className='App'>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cardData.map((index,ele) => (
          <Grid xs={2} sm={4} md={4} key={index}>
           <ProfileCardComponent />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
