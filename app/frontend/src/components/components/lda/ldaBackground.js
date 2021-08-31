import React from "react";
import { Header } from "semantic-ui-react";
import { InlineMath, BlockMath } from "react-katex";

export const LDABackground = (_) => {
	return (
		<div className="lda__background">
			<Header size="huge">Background</Header>
			<p>
				Linear Discriminant Analysis (LDA) is used to project multidimensional
				labeled data to a lower dimensional representation that allows for
				potentially easier classification. This lower dimensional representation
				maximizes the spread of the projected classes' centroids while
				minimizing the projected scatter of the projected classes.
			</p>
			<p>
				For the case of reducing 2D data to 1D, we project the data through:
			</p>
			<BlockMath math="y = \textbf{w}^T \textbf{x}" />
			<p>
				To figure out what <InlineMath math="\textbf{w}" /> is, we will consider
				optimizing the following:
			</p>
			<BlockMath math="F = \frac{(\mu_1 - \mu_2)^2}{\sigma_1^2 + \sigma_2^2}" />
			<p>
				where <InlineMath math="F" /> denotes Fisher's Discriminant Ratio and:
			</p>
			<BlockMath
				math="\begin{aligned}
                \mu_i   &= \mathrm{E}[y^{(i)}] 
                        = \mathrm{E}[\textbf{w}^T \textbf{x}^{(i)}]
                        = \textbf{w}^T \mathrm{E}[\textbf{x}^{(i)}]
                        = \textbf{w}^T \textbf{m}_i \\
                \sigma_i^2  &= \mathrm{E}[(y^{(i)} - \mu_i)^2]
                            = \mathrm{E}[\textbf{w}^T (\textbf{x}^{(i)} - \textbf{m}_i)
                                (\textbf{x}^{(i)} - \textbf{m}_i)^T \textbf{w}]
                            = \textbf{w}^T \Sigma_i \textbf{w}
            \end{aligned}"
			/>
			<p>
				where <InlineMath math="\Sigma_i" /> denotes the covariance of the{" "}
				<InlineMath math="i" />
				-th class and <InlineMath math="\textbf{m}_i" /> denotes the mean of the{" "}
				<InlineMath math="i" />
				-th class. We observe the following:
			</p>
			<BlockMath
				math="\begin{aligned}
                \sigma_1^2 + \sigma_2^2 &\propto 
                \textbf{w}^T S_w \textbf{w} \\
                (\mu_1 - \mu_2)^2 &\propto 
                \textbf{w}^T S_b \textbf{w} \\
                S_w &= \sum P_i \Sigma_i \\
                S_b &= \sum P_i (\textbf{m}_i - \textbf{m}_0)
                        (\textbf{m}_i - \textbf{m}_0)^T
            \end{aligned}"
			/>
			<p>
				where <InlineMath math="P_i" /> denotes the <InlineMath math="i" />
				-th class and <InlineMath math="\textbf{m}_0" /> denotes the overall
				data mean. With this formulation in mind, our objective function then
				turns into:
			</p>
			<BlockMath
				math="F(\textbf{w}) = \frac{\textbf{w}^T S_b \textbf{w}}
            {\textbf{w}^T S_w \textbf{w}}"
			/>
			<p>
				The solution vector <InlineMath math="\textbf{w}" /> (Fisher's Linear
				Discriminant) that maximizes <InlineMath math="F" /> is:
			</p>
			<BlockMath
				math="w \propto S_w^{-1} 
            (\textbf{m}_1 - \textbf{m}_2)"
			/>
			<p>
				However, if we wish to project our data to <InlineMath math="k > 1" />{" "}
				dimensions:
			</p>
			<BlockMath math="\textbf{y} = W^T \textbf{x}" />
			<p>then our objective function is defined analogously like so:</p>
			<BlockMath math="J(\textbf{w}) = \frac{|W^T S_b W|}{|W^T S_w W|}" />
			<p>
				<InlineMath math="W" /> is constructed by taking the{" "}
				<InlineMath math="k" /> eigenvectors corresponding to the{" "}
				<InlineMath math="k" /> largest eigenvalues (in magnitude) of:
			</p>
			<BlockMath
				math="S_b \textbf{w}_i = \lambda_i S_w \textbf{w}_i
            \iff (S_w^{-1} S_b) \textbf{w}_i = \lambda_i \textbf{w}_i"
			/>
			<Header size="large">References:</Header>
			<ul>
				<li>
					<a
						href="https://en.wikipedia.org/wiki/Linear_discriminant_analysis"
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
