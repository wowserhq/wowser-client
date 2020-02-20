import fengari from 'fengari';

const {
  lauxlib,
  lua,
  lualib,
  to_jsstring,
  to_luastring,
} = fengari;

const {
  luaL_error,
  luaL_loadbuffer,
  luaL_newstate,
  luaL_ref,
  luaL_unref,
} = lauxlib;

const {
  LUA_REGISTRYINDEX,
  LUA_TBOOLEAN,
  LUA_TFUNCTION,
  LUA_TLIGHTUSERDATA,
  LUA_TNIL,
  LUA_TNONE,
  LUA_TNUMBER,
  LUA_TSTRING,
  LUA_TTABLE,
  LUA_TUSERDATA,
  lua_Debug,
  lua_atnativeerror,
  lua_call,
  lua_checkstack,
  lua_concat,
  lua_createtable,
  lua_gc,
  lua_getglobal,
  lua_getinfo,
  lua_getlocal,
  lua_getstack,
  lua_gettop,
  lua_insert,
  lua_isnumber,
  lua_isstring,
  lua_isuserdata,
  lua_pcall,
  lua_pushcclosure,
  lua_pushcfunction,
  lua_pushlightuserdata,
  lua_pushlstring,
  lua_pushnil,
  lua_pushnumber,
  lua_pushstring,
  lua_pushvalue,
  lua_rawget,
  lua_rawgeti,
  lua_rawset,
  lua_replace,
  lua_setglobal,
  lua_setmetatable,
  lua_settable,
  lua_settop,
  lua_toboolean,
  lua_tocfunction,
  lua_tojsstring,
  lua_tolstring,
  lua_tonumber,
  lua_touserdata,
  lua_type,
} = lua;

const {
  luaL_openlibs,
  luaopen_base,
  luaopen_bit,
  luaopen_math,
  luaopen_string,
  luaopen_table,
} = lualib;

export {
  LUA_REGISTRYINDEX,
  LUA_TBOOLEAN,
  LUA_TFUNCTION,
  LUA_TLIGHTUSERDATA,
  LUA_TNIL,
  LUA_TNONE,
  LUA_TNUMBER,
  LUA_TSTRING,
  LUA_TTABLE,
  LUA_TUSERDATA,
  lua_Debug,
  lua_atnativeerror,
  lua_call,
  lua_checkstack,
  lua_concat,
  lua_createtable,
  lua_gc,
  lua_getglobal,
  lua_getinfo,
  lua_getlocal,
  lua_getstack,
  lua_gettop,
  lua_insert,
  lua_isnumber,
  lua_isstring,
  lua_isuserdata,
  lua_pcall,
  lua_pushcclosure,
  lua_pushcfunction,
  lua_pushlightuserdata,
  lua_pushlstring,
  lua_pushnil,
  lua_pushnumber,
  lua_pushstring,
  lua_pushvalue,
  lua_rawget,
  lua_rawgeti,
  lua_rawset,
  lua_replace,
  lua_setglobal,
  lua_setmetatable,
  lua_settable,
  lua_settop,
  lua_toboolean,
  lua_tocfunction,
  lua_tojsstring,
  lua_tolstring,
  lua_tonumber,
  lua_touserdata,
  lua_type,
  luaL_error,
  luaL_loadbuffer,
  luaL_newstate,
  luaL_openlibs,
  luaL_ref,
  luaL_unref,
  luaopen_base,
  luaopen_bit,
  luaopen_math,
  luaopen_string,
  luaopen_table,
  to_jsstring,
  to_luastring,
};
