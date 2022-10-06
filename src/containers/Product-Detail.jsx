import { ProductDisplay } from '../components'

export default function ProductDetail({ datas }) {

	return (
		<div className="container product-detail-container">
			<div className="row">
				<div className="col-md-6" >
					<ProductDisplay />
				</div>
				<div className="col-md-6" style={{ width: '70%' }}>

				</div>
			</div>
		</div>
	)
}