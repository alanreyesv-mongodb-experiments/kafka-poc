var hostname = db.hostInfo().system.hostname
console.log("Setting up MongoDB replica set with hostname: ", hostname)

rsconf = {
  _id: "rs0",
  members: [{ _id: 0, host: `${hostname}:27017`, priority: 1.0 }],
};
rs.initiate(rsconf);
rs.status();
