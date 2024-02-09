import ClassRoom from "./0-classroom.js";

function initializeRooms(a, b, c) {
  const obj1 = new ClassRoom(a);
  const obj2 = new ClassRoom(b);
  const obj3 = new ClassRoom(c);
  return [obj1, obj2, obj3];
}

initializeRooms(19, 20, 34);
