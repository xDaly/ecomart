import React from 'react';

function Profile() {
    return (
        <>
            <div className="pt-5 pb-4">
                <div className="wrapper">
                    <div className="profile-card js-profile-card">
                        <div className="profile-card__img">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8DAwUAAAD8/Pz///35+fkHBwl1dXUEBAQDAgcAAAP9/f/6+vz29vampqgKCgzNzc+ysrLBwcFxcXHb29vr6+yOjo7i4uIQEBKhoaEyMjPp6et3d3esrK7Jyck5OTtgYGBMTEwlJSaZmZmFhYVnZ2cbGxtUVFQpKSlEREW6urqGhoeSkpTV1dU8PDwdHR/HdAuzAAAQfklEQVR4nO1ciXbiuBKVS2PF8RKzmX0nhEBC8v9/9+qWZJYOZqZfmAA9ut2nm4BjfF2l2mWlPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PP4b0AylQvzzp0KHOuS/fy5FFmEYCs9rX8m/BhZe2FjoP1iGSo2nRC0VXvtKLg4xMYlSxTNRQCud/GFLkdlolSaJ7k2oa6KcRvxzklz7si4HDY5MaDMhMrHJA+qmaZJe+7IuCqhkbcX88sAExhha8Ft/2FoshjkFgIkiE1G3o/4QIWpZgip86pIl6EBLXpd/gq3RVhc3/WN+zJAa1762C0FnWrUeiKIojo4pztQfoaWsox32gEwwP5ahCaiu7t5dYAVmvTkRG1BmeCzDnF474kaufZXfAQuwwR4iDk6D3nAP7pkhJxBbVlBWyJMwMYen951HsRXVQ8pP8xMhTvV9K6niVLfFYUz0ywosZRgF8Bh3TRESeqLYnFZTfp/W2X0zFEwoyk/KEGpKPZVd+wK/jQ0F+SkhwsJG9FLcfy6cTumkmooPiWh591oqxqbKmEYRUe3aV/h/giWT2awwVG8cs502NoYjm2Vyn3U3HTIyliBzLebE0qqkOFJ3WXnjWCXLbMCi1YLjmtOhWxQY+izuNHTrTJsiQejrjMzp2I2trKH3u5Rhp8kR6cZm+FrXkD6dUlJEA6ie3g8gC1S1kTLFtA6VK1Q0K8ypdYpNdTfxaSgSU40POIg44IjFuXOEp6fXIRhyeHoveopsQnVmJR2iTJaYTmBsKoQYR4Y+7kaGHEcXbzkhiIH+5dS2dW2dFh+Vbt+w36/fixC1Xhg2KsaYR8A8uohFp2p0JrCJqFvcdBqVoOWS6DQJUbW3i8ulhDRVmfRkUr2m3Jw0qHiPhjft9uHXU1bH1urXCDSCx8hs0bRGEf+pkCO9bG+5yK+TlG//oM0O4jh0QX/ihRN9LRSH7BOrEsWAViq84UyRtbR4/6Q4/tUjoI+2kNaazsLOJ1WmwoEYm2vzqEYiHpDzh68EuqiKwqGzCrZPBzb2XtCkuFWGWifbLwtwh1giFhfq9KmSYQ5hY0XfIk2taobyqrKvkYhFSTTQqGbIHmPeUjfqFfmihigZVgpxZpvAmVazSqeY54aWbp7o5sAXlfWrIxbK2YgoyYlVp1Kb2cwaGt+osWFneCZi4dCNPgrlOoltCk4nihFit2l2q/FpEYav1RSlBZOGCRgWdKZ6GtOII4drkzkFrJ0xBZVLkXOMLWI7CKjHUXlFp4aPmw9utKUI+zBkitWXvpQcF7nx7IxRyqXfdosAQzYilTJk/RvbbF+zsCuOi+S4wbW5HEPutx220OqdgkqnGNAkS7AQ+cAHsacV4r6lfhsrHGqiSI7sG9m8ulUYBYhYbIlji6Z3UFUi5lzkZgrEoUZnrD7puAtK6mfMKecYmfpLkgz1RgHnICczRfYY6/BmusLw4K010comPSlaMJUE2Ss+2+k2baunFceZiIWd3YgU2bgMu2w2WK/kxyStnWnBmICNTaglW64MDyJjOD4orq2nNlFgrRzJmEyAqqgUtxN4jNMN7SBmPZ2GpcdYUcVhUpV6uHLJhvUs4+AkrPcpxnWamPVK1k6oixcWaWWhAjmuLVRsOZc8Ex7UVHZNv69l0L41xRSJQdGC9aqDxAGyXVRU7+2lfzpPoNXDGd8Z0UpdNbKBgUFJhmzrmm0ICmXKlmKKydk0/i20MtStl0pjA89y3XEwrQrURDHFFWPdoNoEvRJvjhz3TCmmbMGElSVwuWdEV6hJWRuBmr1uzKQmiiEZIQOKK5e7arU8m8YPbQuGl/IadeMqc4PwINE/LEcooUQks69zamxeeplzduPKkmhAhmzEIs0byvOKniIz7HbSHx9zt+GIDFJ+KalxKNKVsi9Kng9nq/d9VzsN1aoyx2DNp+nPDxDjsrLeK5ou8ZfxGKmKivqFqlNd0CDXghGPOo6rjE1kq1c/XQHnq8Ikcx497nAoHTEi+i/ch+rwFEKcZ9KC45i2XeH2WUXYPK9/3GOwnV+yXkUHDI+osl7JDhEW0ISOkozjG8LGRmafZUIjD06cTZDTkxX2j6kqhNOZQ82qNJD1SowDpxtnI5Z8WwqnVx3Gsnmet9Iw/MnwzdZYKrxdHCPHRZdQ0KRupT/HAHt5z/qyEk9mzbwSh866/RTYo4dwYtVleVok9ooyjliqA5ucGom7Z+MzuUhu4ha2Yv4YQesJ6hXzBoHEWvOOO1Y9n2GIgkZ5ymblCDju2PTHuxj8dSvkDuh0HqGk2HQZrgqdcAxc5/FhCN7erf7ZAeI8OgWynuWHE0VENJxInIEbMwzVRihG8enDXnbCbp89Xb/zw0JEBthrPlSi2XxuA88djRwXrevmcPjLQUN+Z9i2x2Uq4wOaVaccLsc/PED89xsHGvbej0M7A0X94vRxPXvc30vop2UowciZz8EQ62ysbHRK/a9Fes4YQmYorSatz/qDH3X46q8dzh0lDAMsx6ZQZRmejJ+ZISzTP97Y9c++/Xv4LYYiwwhBQEWjpSfe5LYY/jPsZchayoa0X5zO8n6X4e2gZJhwlA7MB6cX0i0xdLXR3evypT7+2WEnwzDksDlNU62TnbU4+K8nu73+hqE++erCxhX+AR4py4osCw8fSSK1CPejdp9q5+iZYXntic2cZSyKzwIosaXoA5cMQ3lUhsaXSNl1f0vtU0L4rcL+puYMNLxsaiyzZuP26qWb96c9DkUaw2fGWxHq0j+22tN+TvPV+1iVDPnV6PmN0UbvJsNIO4fZ7dkrdV+n71vIMEaZPy2/RKvW+/I1N6+rt4ZSgzd8xfNYRiD4GzbPszk9fs6GIy156kUJhjobvWJFBbKuVttn66vtmBPfTRTedkHWaM/QrsPXIkmlKpPV+/vjZo2FBPA7hmq82n/6Wt/YF5gvDsOi97L/7PO9OO+Sf5+hlNbEPaNpEtPLq5Qsuh1bXCwe7KckkxTMUVIF5w8jiWng0rPOyh4X2ePyvvQ3dlqKsyDbNwYTqcQqweE4J/msI531frSBf4P6rYs892Xvdmok2wcpwkx9jtqvJAfMELLpoHWB0phNJMoCQOnxhSG7i6RDrJURuRp5IDO2+FhLLaaYYb/JoykLGLgZgTCUSodst4k5yY6wZ4Pyi8z1W8/KGr+JSVIgEz8G9hIMyi1gyDFx0cUuCk5/zGNM/FFu8q8MmQTfpq5s7oof6RG3qhwCxzLTgwnEHYn8Hh/zXQmVGSbJkkycl/mM1J4xEv79WE4YhioZvMpuHlMuA5ZWFFuGSaqKFfQnMuUF5MZl7L8wRHkxx9YRd1xk9gxVmj5Qzp9G5afmgGG65ZN2jYnbtW2txqI2YFu/FEOmOJWiLS+c51GjUW9/ltVukSEmEyA0ouVTY9xYrMteza8Mm5zlmi4f98Bn2bTnu8MIxmrkREOr3qbR6M12WT8zxMwtXm2t93ni5Wkiml2gPuVk6AqfNGvZM2ZvpZC6Ha0Gn7Knh+ZjG5ilT2UR8ZjhloIu1t66Y48r3l0BQGTYeWXCLP1PJxm96ZLbZvKkCuxcNNRV6GKwW51aMV9gY60w1OGUsDxoNVDlgwHenImADEeiUPS63SlN3ZV4Dxm6vnBE64Et8domIwxjBIYjlhnLhba77xjjHSvDDHm0wSwO30BOu+rIn4fDiqTztxmq1hzfRd0BhhDwNjuiqU0A8eSVTxlLx7e7BCmE3n6R4YAgE4oLdx/gzTgsz3kBgCHsKMfom913Q29z7NZwDDFYTcvNoQW9iLcAQ9zMAC3ssg2EOs0LORkOZMiwbJfZL87k02MZNmRh0SJxkRz8o2wqJTBMuwRLtjoqVvRl+WMdLsEfcxz00l+169uBulDabxn2MJlO3a1SjgXKY6tShnW4t4gaSaLdthg7FnXEkPNDaYUSpxupkyFC3al1q1rJ9AZGEg+TrCdyWgodztm9REISEUWzpiSQuwRDFDMhpFWW7jjwxT2XMlzAzGEMrexkItaoW4Edaqn9hXlRjlVK2QJ3QrRUfiH/peXrMhRmyOIkjArAZvNaRulu3biclk5FXMvDHpBWO4ZteHu2a2k5EIor3xxVMaROM7QvEAOVx+2ypwS+IsdZkoM8XtXEmEpMs+3bGjQmqEofU1ffH5a2DJvCYRXu0nT+P32WeFNkKNvvBrsboCV7qpRhqaVS5HXaLAwRihXMf8cwHZcyTLERVcIA4Sd+lO1u5/tZotXSHpq9vA7LfnrCS47XYWRlWLeWZrx/TpBsqPhiS3tuHe5uBPKVpSWWYB1CmFiHJcHE/oowRO7W6j3Y7MJFtQE9f3+k38qQraBs0lV7hqr1WcpwQNLwfDhM/L/a0gGfBUqGQn7Zj1HlPDszZFuKaGB6ZGkmJcOyPlB06s3VpOueISKW9yJa2npBQEXdQzNgZ/PE43/K5uWD8XpdjpB88YfoGhYHD4XC3gW7DtUHxxAxHfhDBA6R+MgnNdhutxyR2qHaQW0hFA31O99it2OotQ1L5ZYlCQxKMrRP09nFNBEamSpxzdo6nYhL9RAP2TNwHGmqJXbYhW2JnCW3e51D1y6EJY2sDEc2SmuXEm4QMhn6bKnvVjIsQzyyQ8S0cg2XzpDs1i1hOJjbsHjeyET3il7XNUYPGYrLMxg5XNdS3CjVKQkKw07fqsJ8lEHGOly82P0KiEvlV11LH6MZhV21H8W3EygXl3JgGnOCiHZsfdtqvBk8aaaUYcJWEkLkT6dP29ZYcotufMxQKsKc4xn8peaIz8K5RbmDjxlqMSsGocW6V2ttFzO7RdrKcNBHemjnh3BdT3LLedV+O6xxWgoxGeOSG5sBxpLk2icCctRo4IvL/JDtzoncIk2KPh6WiAh6l2XuZYhQF6nzLnuEXcItgAwRVqG0QJNFrVbbDOVZPtJ+/K7XF2+B/Y4b628liQjcEFtZxUg4f6KIM3B77ZFsNjyxDjl/MvYsnMLHuzoBDHECA1tMsLpktAHxjTyFQOIBZphNyD51YZ8eR/RYSA3sQhjjlkvP11YpYhk4kUoUSoCvKEHx2pfrRpon5SbLECWnSSEevoU5nCiyoyU5KjFSkyJcptYdzDOSsZUoTKWQHYsasfvpvNi8+hEFEBwRHdvdb0PL1l77wDwIiWIUBctaWybPkyVnX3CjP+zdFoYSKct+p9A+QkLkhDIpRR9oliMutRNgQ7LVgyiOoax9PiGrxQjz3oOmhDRYLJF8+Nm4aFMRlcCeVDrl0rvrfb1UC8WsMdv1vYNJWencMcT2UQnJw9EkKo/L142FfWWfmcH/jPdnof7T2K5YOzKkR+uDgun8oaMv+4S3DCW1cW/5St2P4WibqO2oDmS2XopEpvY0nPBXN5/GqRrIh0+F1mN5tZHRdVvS57P06bH/8MReo8Uf1es9xxB1ly2fJaf+sse+p6jX8S3sIqWkr2uj9+lkPVk/LDaDyz/Bbm+1XAmifF87B21bNK5KuyvTh4eHuYNxin3kBoR2bLU8/peB0r/Kqdbd1yu7jfY2tip4/KdxOy3tfwueoYeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh8d94n8q2+GgYEbm1QAAAABJRU5ErkJggg==" alt="profile card" />
                        </div>

                        <div className="profile-card__cnt js-profile-cnt">
                            <div className="profile-card__name">SHOP NAME</div>
                            <div className="profile-card__txt">Front-end Developer fromdz fefeg rzgg </div>
                            <div className="profile-card__txt"><strong>Category</strong></div>
                            <div className="profile-card-loc">
                                <span className="profile-card-loc__icon">
                                    <i className="fa-duotone fa-map-location-dot"></i>
                                </span>

                                <span className="profile-card-loc__txt">
                                    Sousse, Tunisia
                                </span>
                            </div>

                            <div className="profile-card-inf">
                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">1598</div>
                                    <div className="profile-card-inf__txt">Followers</div>
                                </div>

                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">65</div>
                                    <div className="profile-card-inf__txt">Following</div>
                                </div>

                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">123</div>
                                    <div className="profile-card-inf__txt">Articles</div>
                                </div>

                                <div className="profile-card-inf__item">
                                    <div className="profile-card-inf__title">85</div>
                                    <div className="profile-card-inf__txt">Works</div>
                                </div>
                            </div>

                            <div className="profile-card-social">
                                <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item phone" >
                                    <span className="icon-font">
                                    <i className="fa-regular fa-circle-phone"></i>
                                    </span>
                                </a>
                                <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item facebook" >
                                    <span className="icon-font">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </span>
                                </a>

                                <a href="https://twitter.com/iaMuhammedErdem" className="profile-card-social__item twitter" >
                                    <span className="icon-font">
                                        <i className="fa-brands fa-twitter"></i>
                                    </span>
                                </a>

                                <a href="https://www.instagram.com/iamuhammederdem" className="profile-card-social__item instagram" >
                                    <span className="icon-font">
                                        <i className="fa-brands fa-instagram"></i>
                                    </span>
                                </a>

                                <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item facebook" >
                                    <span className="icon-font">
                                        <i className="fa-brands fa-facebook-messenger"></i>
                                    </span>
                                </a>

                                <a href="https://www.facebook.com/iaMuhammedErdem" className="profile-card-social__item whatsapp" >
                                    <span className="icon-font">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </span>
                                </a>



                            </div>

                            <div className="row">
                                <button className="m-2 col btn btn-primary">Message</button>
                                <button className="m-2 col btn btn-primary">Follow</button>
                                <button className="m-2 col btn btn-primary">Follow</button>
                                <button className="m-2 col btn btn-primary">Follow</button>

                            </div>
                        </div>

                        <div className="profile-card-message js-message">
                            <form className="profile-card-form">
                                <div className="profile-card-form__container">
                                    <textarea placeholder="Say something..."></textarea>
                                </div>

                                <div className="profile-card-form__bottom">
                                    <button className="profile-card__button button--blue js-message-close">
                                        Send
                                    </button>

                                    <button className="profile-card__button button--gray js-message-close">
                                        Cancel
                                    </button>
                                </div>
                            </form>

                            <div className="profile-card__overlay js-message-close"></div>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}


export default Profile