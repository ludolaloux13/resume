<template>
    <div class="resume-wrapper">
        <div class="left-side">
            <div class="picture-frame">
                <div class="picture">
                </div>
            </div>
            <div class="name">
                {{ $t('profile.name') }}
            </div>
            <div class="job-title">
                {{ $t('profile.title1') }}<br>
                {{ $t('profile.title2') }}
            </div>
            <div class="description">
                <div class="description-header">
                    <font-awesome-icon size="2x" :icon="['far', 'user']"/> 
                    <span class="description-title">{{ $t('profile.description') }}</span>
                </div>
                <div class="description-content">
                    <p>{{ $t('profile.description-content') }}</p>
                </div>
            </div>
        </div>
        <div class="right-side">
            <p>hello</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resume"
    };
</script>

<style scoped lang="scss">
    .resume-wrapper {
        height: 1170px;
        width: 827px;
        display: flex;
        .left-side {
            width: 35%;
            height: 100%;
            background: #45bec0;
            color: white;
            .picture-frame {
                border-radius: 50%;
                border: 10px solid white;
                width: 186px;
                height: 186px;
                margin-top: 30px;
                margin-left: auto; 
                margin-bottom: 30px;
                margin-right: auto;

                .picture {
                    border-width: 3px;
                    border-style: solid;
                    border-color: black;
                    border-radius: 50%;
                    width: 180px;
                    height: 180px;
                    background-image: url("../assets/profilepicture.jpeg");
                    background-size: 100%;
                    background-repeat: no-repeat;
                }
            }

            .name, .job-title {
                text-align: center;
            }
            .name {
                font-weight: 600;
                font-size: 35px;
                border-bottom: solid 4px white;
                padding-bottom: 8px;
            }
            .job-title {
                padding-top: 8px;
                font-weight: 400;
                font-size: 30px;
            }

            .description {
                .description-header {
                    padding-top: 30px;
                    padding-left: 36px;
                    .description-title {
                        font-size: 22px;
                        padding-left: 15px;                    
                    }
                }
                .description-content {
                    padding-left: 16px;
                    padding-right: 18px;
                    font-size: 18px;
                    text-align: left;
                }
            }
        }

        .right-side {
            width: 65%;
            height: 100%;
            background: rgba(75, 75, 75, 0.25);
        }
    }
</style>
