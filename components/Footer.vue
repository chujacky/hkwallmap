<template>
  <footer class="footer">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="content">
            <p>
              Website by Jacky Chu
            </p>
            <a href="https://www.linkedin.com/in/jacky-chu/" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']"/>
            </a>
            <a href="https://github.com/chujacky/" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon class="social-icon" :icon="['fab', 'github']"/>
            </a>
          </div>
        </div>  
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="content">
            <p>HKLAXWALLS © 2020</p>
            <a href="https://www.instagram.com/hk_lax_walls/" class="social-icon" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'instagram']"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'page-footer'
}
</script>

<style>
  .footer {
    padding: 40px;
  }

  .social-icon {
    font-size: 20px;
    color: #333;
  }

  .social-icon:hover {
    color: #888;
  }

  .fa-instagram {
    float: right;
  }
</style>
