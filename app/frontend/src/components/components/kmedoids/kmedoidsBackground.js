import React from "react";
import { Header } from "semantic-ui-react";
import { InlineMath, BlockMath } from "react-katex";

export const KMedoidsBackground = (_) => {
	return (
		<div className="kmedoids__background">
			<Header size="huge">Background</Header>
			<p>
				<InlineMath math="k" />
				-medoids clustering is an unsupervised algorithm that acts nearly
				similar to <InlineMath math="k" />
				-means clustering. <InlineMath math="k" />
				-medoids is not limited to using squared euclidean distance for its
				distance metric (unlike <InlineMath math="k" />
				-means). Also it picks a data point to serve as the "center"/"medoid",
				not the mean of a cluster. Like <InlineMath math="k" />
				-means, <InlineMath math="k" />
				-medoids tries to also minimize the below function:
			</p>
			<BlockMath
				math="\sum_{i=1}^{k} 
            \sum_{\textbf{x} \in C_i} \mathrm{Dist}(\textbf{x}, \bm{\mu}_i)"
			/>
			<p>
				where <InlineMath math="C_i \in \{ C_1, \ \dots \ , C_k \}" /> denotes
				the clusters, <InlineMath math="\bm{\mu}_i" /> denotes the medoid of
				cluster <InlineMath math="C_i" />, and{" "}
				<InlineMath math="\mathrm{Dist}" /> denotes the distance function used
				here (Euclidean, Manhattan, etc.).
			</p>
			<Header size="large">References:</Header>
			<ul>
				<li>
					<a
						href="https://en.wikipedia.org/wiki/K-medoids"
						target="_blank"
						rel="noopener noreferrer"
					>
						Wikipedia
					</a>
				</li>
			</ul>
		</div>
	);
};
