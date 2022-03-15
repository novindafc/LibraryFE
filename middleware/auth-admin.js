export default function({$auth, redirect, store}) {
    // const user = $auth.user;
    if($auth.loggedIn===true) {
      // let the user in
      redirect('/')
    } else {
    //   store.dispatch('snackbar/setSnackbar', {color: 'error', text: "You must be an admin to view that page."})
      redirect('/login')
    }
  } 