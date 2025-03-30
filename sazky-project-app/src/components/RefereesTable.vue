<template>
  <div class="container">
    <h2 class="title">Hockey Referee Stats</h2>
    <h3 class="subtitle">Table of referees</h3>
    <div class="table-wrapper">
      <table class="ref-table">
        <thead>
          <tr>
            <th>Referee</th>
            <th>Country</th>
            <th>Season</th>
            <th>Competition</th>
            <th>League</th>
            <th>Matches</th>
            <th>Σ 2m</th>
            <th>Σ 5m</th>
            <th>2m/Match</th>
            <th>5m/Match</th>
            <th>Σ2m Home</th>
            <th>Σ2m Away</th>
            <th>Σ5m Home</th>
            <th>Σ5m Away</th>
            <th>0.5+</th>
            <th>%</th>
            <th>1.5+</th>
            <th>%</th>
            <th>2.5+</th>
            <th>%</th>
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
          </tr>
        </tbody>
      </table>
    </div>
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
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        this.referees = data;
      })
      .catch((err) => console.error(err));
  }
};
</script>

<style scoped>
.container {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Calibri, sans-serif;
  background-color: #181818; /* Черен фон */
  min-height: 100vh;
}

.title,
.subtitle {
  color: #ffffff;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.table-wrapper {
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
  background-color: #ffffff; /* Бял фон на таблицата */
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.ref-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  color: #000000; /* Черен текст */
}

th,
td {
  padding: 0.5rem 0.75rem;
  text-align: center;
  border: 1px solid #000000; /* Черни линии */
}

thead {
  background-color: #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1;
}

th {
  font-weight: bold;
  white-space: nowrap;
}

td {
  white-space: nowrap;
}

tr:nth-child(even) {
  background-color: #fbfbfb;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
