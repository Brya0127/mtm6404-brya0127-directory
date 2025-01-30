function list(clients) {
  return clients.map((client, index) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>
  `).join('');
}

function order(clients, property) {
  return [...clients].sort((a, b) => {
    if (typeof a[property] === 'string') {
      return a[property].localeCompare(b[property]);
    }
    return a[property] - b[property];
  });
}

function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

function info(index) {
  return clients.find(client => client.index === index) || null;
}

function search(query) {
  return clients.filter(client => 
    client.name.toLowerCase().includes(query.toLowerCase())
  );
}
