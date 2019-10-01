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
                <div class="profile-header">
                    <font-awesome-icon size="2x" :icon="['far', 'user']"/> 
                    <span class="header-title">{{ $t('profile.description.title') }}</span>
                </div>
                <div class="description-content">
                    <p>{{ $t('profile.description.content') }}</p>
                </div>
            </div>
            <div class="contact">
                <div class="profile-header">
                    <font-awesome-icon size="2x" :icon="['far', 'id-badge']"/> 
                    <span class="header-title">{{ $t('profile.contact.title') }}</span>
                </div>
                <div class="contact-content">
                    <div class="contact-item">
                        <font-awesome-icon size="1x" icon="envelope"/>
                        <span>{{ $t('profile.contact.mail') }}</span>
                    </div>
                    <div class="contact-item">
                        <font-awesome-icon size="1x" icon="phone"/> 
                        <span>{{ $t('profile.contact.phone') }}</span>
                    </div>
                    <div class="contact-item">
                        <font-awesome-icon size="1x" icon="map-marker-alt"/> 
                        <span>{{ $t('profile.contact.address') }}</span>
                    </div>
                    <div class="contact-item">
                        <font-awesome-icon size="1x" icon="desktop"/> 
                        <span>{{ $t('profile.contact.website') }}</span>
                    </div>
                </div>
                <div class="hobbies">
                    <div class="profile-header">
                        <font-awesome-icon size="2x" :icon="['far', 'paper-plane']"/> 
                        <span class="header-title">{{ $t('profile.hobbies.title') }}</span>
                    </div>
                    <div class="hobbies-content">
                        <div class="hobbies-item">
                            <font-awesome-icon size="1x" icon="swimmer"/>
                            <p>{{ $t('profile.hobbies.sport') }}</p>
                        </div>
                        <div class="hobbies-item">
                            <font-awesome-icon size="1x" icon="guitar"/>
                            <p>{{ $t('profile.hobbies.music') }}</p>
                        </div>
                        <div class="hobbies-item">
                            <font-awesome-icon size="1x" icon="plane"/>
                            <p>{{ $t('profile.hobbies.travels') }}</p>
                        </div>
                    </div>
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
                padding-bottom: 8px;
                font-weight: 400;
                font-size: 30px;
            }

            .profile-header {
                padding-top: 30px;
                padding-left: 36px;
                .header-title {
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
            .contact-content {
                padding-top: 10px;
                padding-bottom: 18px;
                .contact-item {
                    padding-top: 18px;
                    padding-left: 16px;
                    span {
                        padding-left: 12px;
                    }
                }
            }
            .hobbies-content {
                padding-top: 10px;
                .hobbies-item {
                    display: flex;
                    padding-top: 18px;
                    padding-left: 16px;
                    p {
                        padding-left: 12px;
                        margin: 0;
                    }
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
