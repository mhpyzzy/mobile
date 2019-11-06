import React, { useState } from 'react';
import styles from './styles.module.scss';
export default function Home() {
  return (
    <div className={styles.Home}>
      {/* 头部的介绍 */}
      <div className={styles.intro}>
        <div className={styles.intro_title}>
          Opening Private Capital Markets To Next-Generation Investors
        </div>
        <div className={styles.intro_dec}>
          The First Regulated Digitized Securities Issuance, Custody, And
          Trading Platform In A Major Financial Center
        </div>

        <div className={styles.start_investing}>Start Investing</div>
        <div className={styles.learn_more}>Learn More</div>
        {/* 图片 */}
        <img
          className={styles.intro_img}
          src='/image/home/investor_web.png'
          alt=''
        />
      </div>
      {/* as see_in */}
      <div className={styles.see_in}>
        <img className={styles.see_in_gif} src='/image/pulse.gif' />
        <div>
          <div className={styles.see_in_text}>As seen in</div>
          <div className={styles.bloomberg}>Bloomberg</div>
        </div>
      </div>
      {/* UBS */}
      <div className={styles.ubs}>
        <div>UBS Top Singapore Dealmaker Set to</div>
        <div>Join Temasek-Backed iSTOX</div>
        <div className={styles.ubs_btn}>FULL ARTICLE</div>
      </div>
      {/* Shareholders */}
      <div className={styles.keys_wrap}>
        <div className={styles.key_title}>Key Shareholders</div>
        <div className={styles.keys}>
          <div className={styles.key_item}>
            <img className={styles.sgx} src='/image/home/sgx.png' />
          </div>
          <div className={styles.key_item}>
            <img className={styles.heliconia} src='/image/home/heliconia.png' />
          </div>
        </div>
        <div className={styles.keys}>
          <div className={styles.key_item}>
            <img className={styles.phatra} src='/image/home/phatra.png' />
          </div>
          <div className={styles.key_item}>
            <img className={styles.ich} src='/image/home/ich.png' />
          </div>
        </div>
      </div>

      {/* Key Partners */}
      <div className={styles.keys_wrap}>
        <div className={styles.key_title}>Key Partners</div>
        <div className={styles.keys}>
          <div className={styles.key_item}>
            <img className={styles.sac} src='/image/home/sac.jpg' />
          </div>
          <div className={styles.key_item}>
            <img className={styles.pwc} src='/image/home/pwc.png' />
          </div>
          <div className={styles.key_item}>
            <img
              className={styles.allen_over}
              src='/image/home/allen_over.png'
            />
          </div>
        </div>
        <div className={styles.keys}>
          <div className={styles.key_item}>
            <img className={styles.rht} src='/image/home/rht.jpg' />
          </div>
          <div className={styles.key_item}>
            <img className={styles.rodyk} src='/image/home/rodyk.png' />
          </div>
        </div>
      </div>

      {/* ime For Change. */}
      <div className={styles.change}>
        <div className={styles.change_dec}>
          Private Capital Markets Are Filled With Opportunity. They’re Also
          Opaque, Fragmented, And Closed To All But The Very Few.
        </div>
        <div>It’s Time For Change.</div>
      </div>

      {/* Meet iSTOX */}
      <div className={styles.meet}>
        <div className={styles.meet_title}>Meet iSTOX</div>
        <div>
          iSTOX uses distributed ledger technology (DLT) to directly connect
          buyers and sellers under a comprehensive Monetary Authority of
          Singapore (MAS) framework. In so doing, iSTOX opens access to private
          issuance and trading to a far larger pool of investors.
        </div>
        <img
          className={styles.meet_img}
          src='/image/home/meet_istox.png'
          alt=''
        />
      </div>

      {/* 图文描述 */}
      <div className={styles.investments}>
        <div className={styles.investments_title}>
          Access Previously Out Of Reach Investments
        </div>
        {/* 1 */}
        <div className={styles.investments_item}>
          <img
            className={styles.investments_img}
            src='/image/home/growth_md.png'
            alt=''
          />
          <div className={styles.investments_item_title}>Unlisted Equity</div>
          <div className={styles.investments_item_content}>
            Equity interest in promising, high-growth companies, such as:
          </div>
          <div className={styles.investments_item_list}>
            • Emerging Asian unicorns{' '}
          </div>
          <div className={styles.investments_item_list}>
            • Tech sector or emerging market startups • Mid-stage pre-IPO
            companies
          </div>
          <div className={styles.investments_item_list}>
            • Tech sector or emerging market startups • Mid-stage pre-IPO
            companies
          </div>
        </div>

        {/* 2 */}
        <div className={styles.investments_item}>
          <img
            className={styles.investments_img}
            src='/image/home/fixed_income_md.png'
            alt=''
          />
          <div className={styles.investments_item_title}>Private Debt</div>
          <div className={styles.investments_item_content}>
            Quality private debt instruments backed by a variety of underlying
            business activities and/or collateral.
          </div>
        </div>

        {/* 3 */}
        <div className={styles.investments_item}>
          <img
            className={styles.investments_img}
            src='/image/home/funds_md.png'
            alt=''
          />
          <div className={styles.investments_item_title}>Exclusive Funds</div>
          <div className={styles.investments_item_content}>
            Shares, units or interest in a exclusive and difficult to access
            fund vehicles investing in a broad range of asset classes.
          </div>
        </div>

        {/* 4 */}
        <div className={styles.investments_item}>
          <img
            className={styles.investments_img}
            src='/image/home/alternative-products-md.png'
            alt=''
          />
          <div className={styles.investments_item_title}>
            Alternative Investment Products
          </div>
          <div className={styles.investments_item_content}>
            A broad range products not commonly available to most investors,
            including:
          </div>
          <div className={styles.investments_item_list}>
            • Collective investment schemes
          </div>
          <div className={styles.investments_item_list}>• Structured notes</div>
          <div className={styles.investments_item_list}>
            • Asset-backed securities
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className={styles.advantages}>
        <div className={styles.advantages_title}>
          <div>Key Advantages</div>
          <div>For Investors</div>
        </div>

        {/* 1 */}
        <div className={styles.advantages_item}>
          <img
            className={styles.advantages_img}
            src='/image/home/more-choices-sm.png'
            alt=''
          />
          <div className={styles.advantages_sub_title}>
            Complete Trading Ecosystem
          </div>
          <div className={styles.advantages_dec}>
            iSTOX allows you to subscribe to, hold, and trade your assets all in
            one place. No separate custodial or other accounts needed.
          </div>
        </div>

        {/* 2 */}
        <div className={styles.advantages_item}>
          <img
            className={styles.advantages_img}
            src='/image/home/issuance-trade.png'
            alt=''
          />
          <div className={styles.advantages_sub_title}>Accessibility</div>
          <div className={styles.advantages_dec}>
            iSTOX offers low or no minimum investment amounts and access to
            previously inaccessible investments
          </div>
        </div>

        {/* 3 */}
        <div className={styles.advantages_item}>
          <img
            className={styles.advantages_img}
            src='/image/home/issuance-scan.png'
            alt=''
          />
          <div className={styles.advantages_sub_title}>Quality Projects</div>
          <div className={styles.advantages_dec}>
            Robust screening and approval process in place to ensure only
            quality investments are offered for issuance and trading.
          </div>
        </div>

        {/* 4 */}
        <div className={styles.advantages_item}>
          <img
            className={styles.advantages_img}
            src='/image/home/no-hidden-fees.png'
            alt=''
          />
          <div className={styles.advantages_sub_title}>
            Cost And Time Effective
          </div>
          <div className={styles.advantages_dec}>
            By eliminating unnecessary middlemen like brokers and separate
            custodians, iSTOX eliminates unnecessary costs and provides
            near-instant settlement.
          </div>
        </div>
      </div>

      {/* believe iSTOX */}
      <div className={styles.believe}>
        We believe iSTOX will be the future of capital markets. With
        cutting-edge technological capabilities, this platform will make
        fundraising near-frictionless for issuers and uncover a vast array of
        investment opportunities for investors. Also, being based in Singapore,
        iSTOX will benefit greatly from its forward-looking regulatory regime
        and robust financial ecosystem.
      </div>

      {/* 轮播图 */}
      <div></div>

      {/* Secure And Trusted */}
      <div className={styles.secure}>
        <div className={styles.secure_title}>Secure And Trusted</div>

        {/* 1 */}
        <div className={styles.secure_item}>
          <img
            className={styles.icon_check}
            src='/image/icon_check.png'
            alt=''
          />
          <div>
            <div className={styles.secure_item_title}>MAS Regulated</div>
            <div className={styles.secure_item_content}>
              Held to rigorous security standards as regulated entity under the
              Monetary Authority of Singapore (MAS)
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className={styles.secure_item}>
          <img
            className={styles.icon_check}
            src='/image/icon_check.png'
            alt=''
          />
          <div>
            <div className={styles.secure_item_title}>Protected User Funds</div>
            <div className={styles.secure_item_content}>
              All user funds reside in a customer trust account held with DBS,
              Southeast Asia’s biggest bank
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className={styles.secure_item}>
          <img
            className={styles.icon_check}
            src='/image/icon_check.png'
            alt=''
          />
          <div>
            <div className={styles.secure_item_title}>
              Multi-Layered Cybersecurity
            </div>
            <div className={styles.secure_item_content}>
              iSTOX is built on secure Amazon Web Services (AWS) cloud
              infrastructure and includes multiple layers of cybersecurity
              protections checked via independent audits
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className={styles.secure_item}>
          <img
            className={styles.icon_check}
            src='/image/icon_check.png'
            alt=''
          />
          <div>
            <div className={styles.secure_item_title}>
              Strong User Protection
            </div>
            <div className={styles.secure_item_content}>
              Platform includes mandatory two- factor authentication and SSL
              encryption
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className={styles.secure_item}>
          <img
            className={styles.icon_check}
            src='/image/icon_check.png'
            alt=''
          />
          <div>
            <div className={styles.secure_item_title}>Unalterable Records</div>
            <div className={styles.secure_item_content}>
              All asset ownership and financial transactions are recorded on our
              immutable proprietary ledger based on the Ethereum blockchain
            </div>
          </div>
        </div>

        {/* 图片 */}
        <img style={{ width: '100%' }} src='/image/home/security.png' alt='' />
      </div>

      <div className={styles.open_account}>
        <div className={styles.open_account_title}>
          <div>Start investing with</div>
          <div>iSTOX now</div>
        </div>

        <div className={styles.open_account_btn}>Open Account</div>
      </div>
    </div>
  );
}
