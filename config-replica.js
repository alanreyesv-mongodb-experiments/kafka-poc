var hostname = db.hostInfo().system.hostname
console.log("Setting up MongoDB replica set with hostname: ", hostname)

rsconf = {
  _id: "rs0",
  members: [{ _id: 0, host: `${hostname}:27017`, priority: 1.0 }],
};

try {
  // Initialize replica set
  rs.initiate(rsconf);
} catch (ex) {
  // If already initialized, force reconfiguration
  // (useful in case of container recreation when the container name would change)
  rs.reconfig(rsconf, {force: true})
}
rs.status();
