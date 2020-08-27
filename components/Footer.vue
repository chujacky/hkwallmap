<template>
  <footer class="footer">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="content">
            <p><a href="https://www.instagram.com/hk_lax_walls/" class="social-icon" target="_blank" rel="noopener noreferrer">
              <font-awesome-icon :icon="['fab', 'instagram']"/></a>
              HKLAXWALLS © 2020 
            </p>
            <p>Website by <a href="https://github.com/chujacky/" target="_blank" rel="noopener noreferrer">Jacky Chu</a></p>
          </div>
        </div>  
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="content">
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
    font-size: 18px;
    color: #333;
  }

  .social-icon:hover {
    color: #888;
  }
</style>
