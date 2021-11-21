import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';
import Form from './components/FormColor';


function App() {
  return (
    <div className="App container">
      <Form></Form>
      <section className="card-section container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      </section>
       
    </div>
  );
}

export default App;
