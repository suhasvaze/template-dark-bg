(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{338:function(e,t,r){"use strict";r.r(t);var a=r(14),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"other-aspects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-aspects"}},[e._v("#")]),e._v(" Other Aspects")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/GL110-DIAGRAMS-Values-Comb-Journals.png",alt:""}})]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"gl-code-combinations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gl-code-combinations"}},[e._v("#")]),e._v(" GL Code Combinations")]),e._v(" "),t("p",[e._v("Task: "),t("code",[e._v("Manage Account Combinations")])]),e._v(" "),t("p",[e._v("When Segment Values are joined together, it forms a GL Code Combination")]),e._v(" "),t("p",[e._v("E.g.")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("110-4501-92250 or 110.4501.92250 are examples of GL Code Combinations (also called as Account Combinations)")]),e._v(" "),t("li",[e._v("A full Account Combination must be specified while entering a Journal Line")]),e._v(" "),t("li",[e._v("All previously used Account Combinations are stored in gl_code_combinations table. A Code Combination ID (called "),t("code",[e._v("CCID")]),e._v(" or "),t("code",[e._v("Account ID")]),e._v(") is generated/assigned for each combination stored in this table.")])])]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"dynamic-combinations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-combinations"}},[e._v("#")]),e._v(" Dynamic Combinations")]),e._v(" "),t("p",[e._v("Task: "),t("code",[e._v("Manage Chart of Accounts Structure Instance")])]),e._v(" "),t("p",[e._v("While creating "),t("b",[e._v("Chart of Account Structure Instance")]),e._v(" it allows to define a check box")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ ] Dynamic Combination Creation Allowed\n")])])]),t("blockquote",[t("ol",[t("li",[t("p",[e._v("When checked, it allows to use (e.g. while Entering Journals) "),t("b",[e._v("New Valid A/c Combination")]),e._v(" which is not previously used and not previously stored in gl_code_combinations table")])]),e._v(" "),t("li",[t("p",[e._v("The "),t("b",[e._v("New Valid A/c Combination")]),e._v(" is automatically inserted in gl_code_combinations table and a CCID is generated and stored in it. This is also referred as "),t("code",[e._v("Dynamic Insertion")])])])])]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"segment-values-inheritance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#segment-values-inheritance"}},[e._v("#")]),e._v(" Segment Values Inheritance")]),e._v(" "),t("p",[e._v("Process: "),t("code",[e._v("Inherit Segment Value Attributes")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("When the characteristics of values in the value sets are updated, such as changes to enabled status, effective date, posting allowed status, or natural account type, all previously created account combinations that referenced such values aren't automatically updated by these changes.")]),e._v(" "),t("li",[e._v("The Inherit Segment Value Attributes process lets you run a controlled process to update such existing account combinations.")])])]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"qualifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qualifiers"}},[e._v("#")]),e._v(" Qualifiers")]),e._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[t("code",[e._v("Flexfield Qualifiers")]),e._v(" in EBS referred to qualifiers attached to "),t("u",[e._v("Segment Level")]),e._v(" while creating COA Structure (Primary Balancing Segment, Natural Account, Cost Center etc) -- these are called as "),t("code",[e._v("Segment Labels")]),e._v(" in Fusion (These should not be confused with "),t("code",[e._v("Tree Labels")]),e._v(" of Account Hierarchy)")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("Segment Qualifiers")]),e._v(" in EBS referred to attributes specified at "),t("u",[e._v("Segment Value Level")]),e._v(" while creating/importing Segment Values. E.g. Allow Posting, Allow Budgeting, Third Party Control A/c etc. -- these do not have any specific terminology in Fusion. They are referred just as segment value attributes.")])])])]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"custom-segment-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-segment-labels"}},[e._v("#")]),e._v(" Custom Segment Labels")]),e._v(" "),t("p",[e._v("Task: "),t("code",[e._v("Manage Chart of Accounts Structure")]),e._v("  (Search for "),t("b",[e._v("General Ledger")]),e._v(" and Go to "),t("b",[e._v("Actions→Manage Segment Labels")]),e._v(")")]),e._v(" "),t("blockquote",[t("ol",[t("li",[t("b",[e._v("Seeded Segment Labels")]),e._v(" are Primary Balancing Segment, Natural Account, Cost Center etc")]),e._v(" "),t("li",[t("b",[e._v("Custom Segment Labels")]),e._v(" can have custom names and they can be used to during SLA Rules Customisation")])])]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),e._v(" "),t("h3",{attrs:{id:"account-aliases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-aliases"}},[e._v("#")]),e._v(" Account Aliases")]),e._v(" "),t("p",[e._v("Task: "),t("code",[e._v("Manage Shorthand Aliases")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[t("b",[e._v("[X] Shorthand alias enabled")]),e._v(" should be checked for the relevant COA Structure Instance in task "),t("code",[e._v("Manage Chart of Account Structure Instances")])]),e._v(" "),t("li",[e._v("Shorthand Aliases are names given for "),t("b",[e._v("Full or Partial")]),e._v(" A/c Combinations that are frequently used")]),e._v(" "),t("li",[e._v("Job of entering full A/c Code Combinations can be simplified by using Shorthand Aliases")])])]),e._v(" "),t("p",[t("b",[e._v("Example")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Shorthand Alias")]),e._v(" "),t("th",[e._v("A/c Combination")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Travel Expenses")]),e._v(" "),t("td",[e._v("101.10.60501.121.000.000")])]),e._v(" "),t("tr",[t("td",[e._v("Freight")]),e._v(" "),t("td",[e._v("101.10.62510.000.000.000")])])])]),e._v(" "),t("p",[e._v("While entering A/c for Journal Line, if we select "),t("b",[e._v("Travel Expenses")]),e._v(" alias, that will populate all COA Segments as above.")]),e._v(" "),t("p",[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")])])}),[],!1,null,null,null);t.default=n.exports}}]);