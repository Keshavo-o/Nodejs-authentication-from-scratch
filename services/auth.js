const sessionIdtoUserMap = new Map();
function setuser(id,user){
    sessionIdtoUserMap.set(id,user);
}
function getuser(id){
    return sessionIdtoUserMap.get(id);
}
function removeuser(id){
    sessionIdtoUserMap.delete(id);
}
module.exports = {
    setuser,
    getuser,
    removeuser
};
//This is just a diary to store user sessions by mapping them
// Session Mapping with Map in Node.js

// A Map is used to store user sessions as sessionId → user pairs.

// Functions:

// setuser(id, user) → saves user data against a session ID.

// getuser(id) → retrieves user data using session ID.

// removeuser(id) → deletes a session entry.

// Works like a mini session store:

// On login → generate session ID, map it to the user, and send session ID (via cookie) to browser.

// On each request → browser sends session ID back, server fetches user with getuser().

// On logout → remove session with removeuser().

// Internally: Map uses a hash table, so operations (set, get, delete) are very fast (O(1)).

// Limitation: Stored in server memory → sessions lost if server restarts or scales.

// Production apps use Redis / DB for persistent session storage.


//Limitation : -🔹 But there’s a catch ⚠️

// This session store is in-memory → stored in your Node.js server’s RAM.

// If your server restarts, all sessions are lost ❌.

// If you scale to multiple servers (load balancer), each server will have its own map → users may get logged out randomly.