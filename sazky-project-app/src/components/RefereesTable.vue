<template>
  <div>
    <h2>Hockey Referee Stats</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Referee</th>
          <th>Country</th>
          <th>Season</th>
          <th>Competition</th>
          <th>League</th>
          <th>Matches</th>
          <th>Σ 2 min.</th>
          <th>Σ 5 min.</th>
          <th>2 min. / Match</th>
          <th>5 min. / Match</th>
          <th>Σ2 min. Home</th>
          <th>Σ2 min. Away</th>
          <th>Σ5 min. Home</th>
          <th>Σ5 min. Away</th>
          <th>over 0.5 / Match</th>
          <th>% over 0.5 / Match</th>
          <th>over 1.5 / Match</th>
          <th>% over 1.5 / Match</th>
          <th>over 2.5 / Match</th>
          <th>% over 2.5 / Match</th>
          <th>over 3.5 / Match</th>
          <th>% over 3.5 / Match</th>
          <th>over 4.5 / Match</th>
          <th>% over 4.5 / Match</th>
          <th>over 5.5 / Match</th>
          <th>% over 5.5 / Match</th>
          <th>over 6.5 / Match</th>
          <th>% over 6.5 / Match</th>
          <th>over 7.5 / Match</th>
          <th>% over 7.5 / Match</th>
          <th>over 8.5 / Match</th>
          <th>% over 8.5 / Match</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in referees" :key="idx">
          <td>{{ item.Referee }}</td>
          <td>{{ item.Country }}</td>
          <td>{{ item.Season }}</td>
          <td>{{ item.Competition }}</td>
          <td>{{ item.League }}</td>
          <td>{{ item.Matches }}</td>
          <td>{{ item["Σ 2 min."] }}</td>
          <td>{{ item["Σ 5 min."] }}</td>
          <td>{{ item["2 min. / Match"] }}</td>
          <td>{{ item["5 min. / Match"] }}</td>
          <td>{{ item["Σ2 min. Home"] }}</td>
          <td>{{ item["Σ2 min. Away"] }}</td>
          <td>{{ item["Σ5 min. Home"] }}</td>
          <td>{{ item["Σ5 min. Away"] }}</td>
          <td>{{ item["over 0.5 / Match"] }}</td>
          <td>{{ item["% over 0.5 / Match"] }}</td>
          <td>{{ item["over 1.5 / Match"] }}</td>
          <td>{{ item["% over 1.5 / Match"] }}</td>
          <td>{{ item["over 2.5 / Match"] }}</td>
          <td>{{ item["% over 2.5 / Match"] }}</td>
          <td>{{ item["over 3.5 / Match"] }}</td>
          <td>{{ item["% over 3.5 / Match"] }}</td>
          <td>{{ item["over 4.5 / Match"] }}</td>
          <td>{{ item["% over 4.5 / Match"] }}</td>
          <td>{{ item["over 5.5 / Match"] }}</td>
          <td>{{ item["% over 5.5 / Match"] }}</td>
          <td>{{ item["over 6.5 / Match"] }}</td>
          <td>{{ item["% over 6.5 / Match"] }}</td>
          <td>{{ item["over 7.5 / Match"] }}</td>
          <td>{{ item["% over 7.5 / Match"] }}</td>
          <td>{{ item["over 8.5 / Match"] }}</td>
          <td>{{ item["% over 8.5 / Match"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RefereesTable",
  data() {
    return {
      referees: []
    };
  },
  mounted() {
    fetch("/data.json")  // ако data.json е в public/
      .then((res) => res.json())
      .then((data) => {
        this.referees = data;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 0.5rem;
  border: 1px solid #ccc;
  text-align: left;
}
</style>
