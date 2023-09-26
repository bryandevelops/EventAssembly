import * as usersService from '../../utilities/users-service';

export default function OrderHistoryPage(props) {
  async function handleCheckToken() {
    try {
      const expDate = await usersService.checkToken();
      alert(expDate.toString())
      console.log(expDate)
    } catch(error) {
      console.log(error.message)
    }
  }

  return (
    <main>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check Login Expiration</button>
    </main>
  );
}