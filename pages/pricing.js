import Layout from '../components/MyLayout';


export default function Pricing() {
  return (
    <>
      <Layout>
<h2>Plan Benefits</h2>
<table class="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Free</th>
            <th scope="col">$10/Month Basic</th>
            <th scope="col">$35/Month Gold</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Benefit 1</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 2</th>
            <td>x</td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 3</th>
            <td></td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 4</th>
            <td></td>
            <td>x</td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 5</th>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
        <tr>
            <th scope="row">Benefit 6</th>
            <td></td>
            <td></td>
            <td>x</td>
        </tr>
    </tbody>
</table>
      
      </Layout>
    </>
  );
}