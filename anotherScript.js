var status = 'online';
var current_status = 'online';

function check_internet_connection() {
    if (navigator.onLine) {
        status = 'online';
    }
    else {
        status = 'offline';
    }

    if (current_status != status) {
        if (status == 'online') {
            $('i.bi').addClass('bi-wifi');
            $('i.bi').removeClass('bi-wifi-off');
            $('.mr-auto').html("<span class='text-success'>You are online now</span>");
            $('.toast-body').text('Hurray! Internet is connected.');
        }
        else {
            $('i.bi').addClass('bi-wifi-off');
            $('i.bi').removeClass('bi-wifi');
            $('.mr-auto').html("<span class='text-danger'>You are offline now</span>");
            $('.toast-body').text('Opps! Internet is disconnected.')
        }

        current_status = status;

        $('.toast').toast({
            autohide: false
        });

        $('.toast').toast('show');
    }
}

check_internet_connection();

setInterval(function () {
    check_internet_connection();
}, 1000);