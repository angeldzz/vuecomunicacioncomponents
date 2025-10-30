<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">Mi App Vue</div>
      <ul class="nav-menu">
        <li class="nav-item"><router-link to="/" class="nav-link">Deportes</router-link></li>
        <li class="nav-item"><router-link to="/comics" class="nav-link">Comics</router-link></li>
        <li class="nav-item"><router-link to="/numeros" class="nav-link">Números</router-link></li>
        <li class="nav-item"><router-link to="/numerodoble" class="nav-link">Numero Doble Sin</router-link></li>
        <li class="nav-item"><router-link to="/numerodoble/77" class="nav-link">Numero Doble</router-link></li>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
    name:"MenuComponent"
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-brand {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 1rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
  position: relative;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background-color: white;
  transition: transform 0.3s ease;
}

.nav-link.router-link-active::after {
  transform: translateX(-50%) scaleX(1);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-brand {
    padding: 0.5rem 0;
  }
  
  .nav-menu {
    flex-direction: column;
    width: 100%;
    gap: 0.25rem;
  }
  
  .nav-link {
    text-align: center;
    padding: 0.75rem;
  }
}
</style>