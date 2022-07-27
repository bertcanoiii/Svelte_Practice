<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let visible = false;

    function showPassword(){
        // dispatch('message', {
        //     text: 'Clicked Show Password Button!'
        //     });
        visible = !visible;
        document.querySelector('#passwordInput').type = visible ? 'text' : 'password';
    }
</script>

<div class="card w-96 bg-base-100 shadow-xl space-y-2">
    <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Random Pic" />
    </figure>
    <div class="card-body space-y-2 ">
        <h2 class="card-title">Login d00d!</h2>
        <input type="text" placeholder="Username" class="input input-bordered border-slate-200 w-full max-w-xs" />
        <div class="flex border border-slate-200 focus:outline-none rounded-lg w-full px-2 max-w-xs items-center">
            <input id="passwordInput" type="password" placeholder="Password" class="input border-none w-full max-w-xs"/>
            <button class="bg-transparent p-0" on:click={showPassword}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </button>
        </div>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
</div>