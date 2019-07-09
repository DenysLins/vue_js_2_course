<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
          to="/"
          class="nav-link"
          active-class="active"
          exact
        >
          <a>Home</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/user/1"
          class="nav-link"
          active-class="active"
        >
          <a>User1</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/user/2"
          class="nav-link"
          active-class="active"
        >
          <a>User2</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
