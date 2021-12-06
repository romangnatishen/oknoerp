<template>
  <section class="trusted-area oknoerp-trusted oknoerp-breadcrumb-area text-center">
      <div class="trusted-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="trusted-content">
                          <div class="trusted__title">
                            <h2 class="trusted__title-title">{{ title }}</h2>
                          </div><!-- end trusted__title -->
                      </div><!-- end trusted-content -->
                  </div><!-- end col-md-12 -->
              </div><!-- end row -->
          </div><!-- container -->
      </div><!-- end trusted-fluid -->
  </section>
</template>

<script>
    export default {
      name: "PageHeader",
      props: {
        title: {
          type: String
        }
      }

    }
</script>

<style lang="scss" scoped>

 .oknoerp-trusted {
  background-image: url("/images/breadcrumb-img.jpg");
}

.oknoerp-breadcrumb-area {
  padding: 280px 0 140px 0;
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    padding: 240px 0 140px 0;
  }
  @media only screen and (min-width: 320px) and (max-width: 479px) {
    padding: 240px 0 140px 0;
  }

  .trusted-content {
    .trusted__title {
      .trusted__title-title {
        font-size: 70px;
        @media only screen and (min-width: 480px) and (max-width: 767px) {
          font-size: 60px;
        }
        @media only screen and (min-width: 320px) and (max-width: 479px) {
          font-size: 50px;
        }
        @media (max-width: 320px) {
          font-size: 42px;
        }
      }
      .bread__rumb-item {
        margin-bottom: 5px;
        li {
          display: inline-block;
          font-size: 16px;
          font-weight: 600;
          position: relative;
          padding-right: 22px;
          a {
            color: #fff;
          }
          &.active-item {
            &:after {
              position: absolute;
              content: "-";
              top: 0;
              right: 0;
              padding: 0 7px;
              font-size: 16px;
            }
          }
          &:last-child {
            padding-right: 0;
          }
        }
      }
    }
  }
}

</style>
